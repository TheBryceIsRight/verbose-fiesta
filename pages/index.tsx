import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { ButtonBase, Typography } from '@mui/material'
import MuiContainer from '@mui/material/Container'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Mail } from '@mui/icons-material'
import useTranslation from "../intl/useTranslation"
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import ConstructionLight from "../public/assets/landing/under_construction_light.svg"
import ConstructionDark from "../public/assets/landing/under_construction_dark.svg"
import RQSLight from "../public/assets/landing/RQS_light.png"
import RQSDark from "../public/assets/landing/RQS_dark.png"
import Magazine_illustrations_cover from "../public/assets/magazine-illustrations/Magazine_Illustrations_cover.png"
import Omonovo from "../public/assets/omonovo/Omonovo.png"
import Lineart from "../public/assets/lineart/LineartCover.png"
import AZCoffee from "../public/assets/az-coffee/Az_Coffee_02.png"
import DesignPatterns from  "../public/assets/patterns/PatternsCover.png"
import Zobeida from  "../public/assets/zobeida/ZobeidaCover.png"


export default function Index() {
  const { t } = useTranslation()
  const theme = useTheme();

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
        <MuiContainer maxWidth="md" style={{ alignContent: "center", alignItems: "center", textAlign: "center" }}>
          <Link href="/work/royal-queen-seeds">
            <ButtonBase >
              <MuiContainer maxWidth="md">
                {theme.palette.mode === "light" ?
                  <Image
                    src={RQSLight}
                    alt="Royal Queen Seeds"
                    width={745}
                    height={300}
                    loading="eager"
                    placeholder='blur'
                  />
                  :
                  <Image
                    src={RQSDark}
                    alt="Royal Queen Seeds"
                    width={745}
                    height={300}
                    loading="eager"
                    placeholder='blur'
                  />
                }
                <br />
                <Typography variant='h4'>
                  Royal Queen Seeds
                </Typography>
                <br />
              </MuiContainer>
            </ButtonBase>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <MuiContainer style={{ textAlign: "left" }}>
            <Typography variant='h3'>Previous Work</Typography>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <Link href="/work/magazine-illustrations" passHref>
                <ButtonBase style={{ textAlign: 'left', borderRadius: 6 }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        <Image
                          src={Magazine_illustrations_cover}
                          alt='Cover Image for Magazine Illustrations'
                          style={{ borderRadius: 8 }}
                          placeholder='blur'
                          loading="eager"
                        />
                      </div>
                    </div>
                    <Typography variant='h4'>
                      Magazine Illustrations
                    </Typography>
                    <br />
                    <Typography variant='body1'>Illustrations for opinion editorials for Sant Jucat</Typography>
                  </div>
                </ButtonBase>
              </Link>
              <Link href="/work/omonovo-animation" passHref>
                <ButtonBase style={{ textAlign: 'left', borderRadius: 6 }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        <Image
                          src={Omonovo}
                          alt='Cover Image for Omonovo'
                          style={{ borderRadius: 8 }}
                          placeholder='blur'
                          loading="eager"
                        />

                      </div>
                    </div>
                    <Typography variant='h4'>
                      Omonovo animation
                    </Typography>
                    <br />
                    <Typography variant='body1'>Developing animated promotional videos for SaaS healthcare startup</Typography>
                  </div>
                </ButtonBase>
              </Link>
            </div>
          </MuiContainer>
          <MuiContainer style={{ textAlign: "left" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <Link href="/work/lineart-illustrations" passHref>
                <ButtonBase style={{ textAlign: 'left', borderRadius: 6 }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        <Image
                          src={Lineart}
                          alt='Cover Image for Lineart'
                          style={{ borderRadius: 8 }}
                          placeholder='blur'
                        />
                      </div>
                    </div>
                    <Typography variant='h4'>
                      Lineart Illustrations
                    </Typography>
                    <br />
                    <Typography variant='body1'>Work from my illustration internship</Typography>
                  </div>
                </ButtonBase>
              </Link>
              <Link href="/work/az-coffee" passHref>
                <ButtonBase style={{ textAlign: 'left', borderRadius: 6 }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        <Image
                          src={AZCoffee}
                          alt='Cover Image for AZ Coffee'
                          style={{ borderRadius: 8 }}
                          placeholder='blur'
                        />

                      </div>
                    </div>
                    <Typography variant='h4'>
                      AZ Coffee
                    </Typography>
                    <br />
                    <Typography variant='body1'>Redfefining brand guidelines for a coffee company</Typography>
                  </div>
                </ButtonBase>
              </Link>
            </div>
          </MuiContainer>
          <MuiContainer style={{ textAlign: "left" }}>
            <Typography variant='h3'>From the archive</Typography>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <Link href="/work/zobeida" passHref>
                <ButtonBase style={{ textAlign: 'left', borderRadius: 6 }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        <Image
                          src={Zobeida}
                          alt='Cover Image for Magazine Illustrations'
                          style={{ borderRadius: 8 }}
                          placeholder='blur'
                          loading="eager"
                        />
                      </div>
                    </div>
                    <Typography variant='h4'>
                      Zobeida
                    </Typography>
                    <br />
                    <Typography variant='body1'>Illustrations inspired by Las Ciudades Invisibles by Italo Calvino</Typography>
                  </div>
                </ButtonBase>
              </Link>
              <Link href="/work/patterns" passHref>
                <ButtonBase style={{ textAlign: 'left', borderRadius: 6 }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        <Image
                          src={DesignPatterns}
                          alt='Cover Image for Omonovo'
                          style={{ borderRadius: 8 }}
                          placeholder='blur'
                          loading="eager"
                        />

                      </div>
                    </div>
                    <Typography variant='h4'>
                      Pattern Designs
                    </Typography>
                    <br />
                    <Typography variant='body1'>Patterns I worked on during my illustration internship</Typography>
                  </div>
                </ButtonBase>
              </Link>
            </div>
          </MuiContainer>
        </MuiContainer>
        {/* In case we need a work in progress disclaimer in the future */}
        {/* <MuiContainer maxWidth="sm" style={{ alignItems: "center", textAlign: "center" }}>
          {theme.palette.mode === "light" ?
            <Image
              src={ConstructionLight}
              alt="Under construction"
              width={745}
              height={300}
              loading="eager"
            />
            :
            <Image
              src={ConstructionDark}
              alt="Under construction"
              width={745}
              height={300}
              loading="eager"
            />
          }
          <br />
          <Typography variant='body1'>
            {t("construction")}
          </Typography>
        </MuiContainer> */}
      </Layout>
    </>
  )
}