import { ReactNode } from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

type PageProps = {
  children: ReactNode
}

function Page(props: PageProps) {
  return (
      <Container>
        <Paper elevation={2} sx={{ p: 4, my: 4 }}>
          {props.children}
        </Paper>
      </Container>
  )
}

export default Page
