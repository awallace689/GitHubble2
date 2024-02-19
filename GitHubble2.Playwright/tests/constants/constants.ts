enum Pages {
  baseUrl = "http://localhost:5173",
  signIn = "signin",
  notFound = "asdf",
}
const pageUrl = (route: Pages | Pages[]) => {
  if (route instanceof Array) {
    return Pages.baseUrl + route.join("/");
  }
  else if (route === Pages.baseUrl) {
    return Pages.baseUrl;
  }

  return Pages.baseUrl + "/" + route;
};

const title = "GitHubble";

type ComponentText = {
  [key in Pages]?: string;
};
const pageText: ComponentText = {
  [Pages.signIn]: "Welcome to GitHubble",
  [Pages.notFound]: "Not Found :(",
};

export { Pages, pageUrl, title, pageText };
