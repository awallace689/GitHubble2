import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import MuiLink from "@mui/material/Link";

import Splash from "../../shared/Splash/Splash";
import SplashLoading from "../../shared/Splash/SplashLoading";

const GitHubConnect = () => {
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const [postCode, setPostCode] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const { isPending, isSuccess, fetchStatus, error } = useQuery({
    queryKey: ["github_link"],
    queryFn: () => fetch("/api/github/link").then((res) => res.json()),
    enabled: !!postCode,
  });

  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    const state = params.get("state");
    const savedState = getSavedState();
    const validState = state && state === savedState;
    if (code && validState) {
      setSearch(new URLSearchParams());
      setPostCode(code);
    }
  }, [search, setSearch]);

  useEffect(() => {
    if (isSuccess) {
      setSearch(new URLSearchParams());
      navigate("gotyourcode");
    }
  }, [isSuccess, navigate, setSearch]);

  useEffect(() => {
    if (error) {
      setSearch(new URLSearchParams());
      setHasError(true);
    }
  }, [error, setHasError, setSearch]);

  const errorHeader = <span>Uh oh</span>;
  const errorBody = <pre>{error?.toString()}</pre>;
  return (
    <>
      {hasError ? (
        <Splash header={errorHeader} body={errorBody} />
      ) : isPending && fetchStatus === "idle" ? (
        <Splash header={header} body={body} additionalInfo={additionalInfo} />
      ) : (
        <SplashLoading />
      )}
    </>
  );
};

const setRequestState = () => {
  let savedState = getSavedState();
  if (!savedState) {
    const array = new Uint32Array(32);
    const state = window.crypto.getRandomValues(array).toString();
    window.sessionStorage.setItem("state", state);
    savedState = state;
  }

  return savedState;
};

const getSavedState = () => {
  const state = window.sessionStorage.getItem("state");
  return state;
};

const oauthLink =
  import.meta.env.VITE_GITHUB_OAUTH_URL +
  new URLSearchParams({
    client_id: import.meta.env.VITE_GITHUB_CLIENTID,
    allow_signup: false.toString(),
    state: setRequestState(),
  });

const header = (
  <span>
    Link your{" "}
    <MuiLink
      href="https://www.github.com"
      underline="hover"
      target="_blank"
      rel="noreferrer"
      sx={{ fontWeight: 900 }}
    >
      GitHub
    </MuiLink>{" "}
    account.
  </span>
);

const body = (
  <>
    <MuiLink href={oauthLink} underline="hover" sx={{ fontWeight: 900 }}>
      Connect
    </MuiLink>{" "}
    to explore and compare your public data.
  </>
);

const additionalInfo = (
  <>
    Connecting will redirect you GitHub's secure sign-in page. Upon connecting,
    you will be able to access the rest of the website!
  </>
);

export default GitHubConnect;
