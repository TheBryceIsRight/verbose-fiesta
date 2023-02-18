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
import useTranslation from "../intl/useTranslation"
import RQS from "../public/assets/royal-queen-seeds/RQS.png"
import cn from 'classnames'
import Image from 'next/image'

export default function Index() {
  const { t } = useTranslation()

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
          <Typography variant='h3'>{t("hi")}</Typography>
          <br />
          <Typography variant='h5'>{t("kickass")}</Typography>
          <br />
          <Grid container spacing={2} alignItems='center' alignContent='center' maxWidth="lg" flexWrap="wrap" direction="column" >
            <Grid>
              <Typography variant='body1'>{t("work_together")}</Typography>
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
            <Link href="/work/royal-queen-seeds">
              <ButtonBase style={{ alignContent: "start" }}>
                <Container>
                  <Image
                    src={RQS}
                    alt='Cover Image for Royal Queen Seeds'
                    placeholder='blur'
                    loading='eager'
                    style={{ borderRadius: 8 }}
                  />                  <br />
                  <Typography variant='h4'>
                    Royal Queen Seeds
                  </Typography>
                  <br />
                  {/* <Typography variant="body1">Lorem ipsum dolor sit amet consectetur.</Typography> */}
                </Container>
              </ButtonBase>
            </Link>
          </section>
          <br />
          <br />
          <br />
          {/* <section>
            <Typography variant='h3'>{t("previous_work")}</Typography>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <Link href="/work/functionize">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/functionize/functionize.png'
                    slug="2-functionize"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/elavon-status">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/systemstatus/system-status.png'
                    slug="3-elavon-status"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/elavon-dev">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Lorem Ipsum"
                    coverImage='/assets/blog/elavon/dev-portal.png'
                    slug="4-elavon-dev"
                    excerpt='Lorem ipsum dolor sit amet consectetur.'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/me">
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
          </section> */}
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
