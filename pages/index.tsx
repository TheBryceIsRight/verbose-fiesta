import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { ButtonBase, Typography } from '@mui/material'
import PostPreview from '../components/post-preview'
import MuiContainer from '@mui/material/Container'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Mail } from '@mui/icons-material'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{"Sandra's Design Portfolio"}</title>
        </Head>
        <MuiContainer style={{ textAlign: 'center', alignItems: 'center' }} maxWidth="lg">
          <br />
          <br />
          <br />
          <Typography variant='h3'>Hi! I'm Sandra</Typography>
          <br />
          <Typography variant='h5'>I kick ass and take names, and I'm all out of names</Typography>
          <br />
          <Grid container spacing={2} alignItems='center' alignContent='center' maxWidth="lg" flexWrap="wrap" direction="column" >
            <Grid>
              <Typography variant='body1'>If you want to work with me I'm currently accepting freelance opportunities, so drop me a line at</Typography>
            </Grid>
            <Grid xs={8}>
              <Link href="mailto:sbenitojunyent@gmail.com" >
                <Button color='secondary' variant='outlined' startIcon={<Mail />}>
                sbenitojunyent@gmail.com
                </Button>
              </Link></Grid>
          </Grid>
          <br />
          <br />
          <br />
        </MuiContainer>
        <Container>
          <section>
            <Link href="/work/1-allvoices">
              <ButtonBase style={{ alignContent: "start" }}>
                <Container>
                  <CoverImage title="AllVoices" src="/assets/blog/allvoices/allvoices.png" slug="/work/1-allvoices" />
                  <br />
                  <Typography variant='h4'>
                    Lorem Ipsum
                  </Typography>
                  <br />
                  <Typography variant="body1">Lorem ipsum dolor sit amet consectetur.</Typography>
                </Container>
              </ButtonBase>
            </Link>
          </section>
          <br />
          <br />
          <br />
          <section>
            <Typography variant='h3'>Previous Work</Typography>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <Link href="/work/2-functionize">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/functionize/functionize.png'
                    slug="2-functionize"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/3-elavon-status">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/systemstatus/system-status.png'
                    slug="3-elavon-status"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/4-elavon-dev">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/elavon/dev-portal.png'
                    slug="4-elavon-dev"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/5-me">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/aboutme/coffee.png'
                    slug="5-me"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
