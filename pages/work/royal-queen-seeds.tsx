import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import Head from 'next/head'
import undraw_hero_light from '../../public/assets/royal-queen-seeds/RoyalQueenSeedsUndrawLight.svg'
import undraw_hero_dark from '../../public/assets/royal-queen-seeds/RoyalQueenSeedsUndrawDark.svg'
import RoyalQueenSeedsLogoLight from '../../public/assets/royal-queen-seeds/RoyalQueenLogo-light.svg'
import RoyalQueenSeedsLogoDark from '../../public/assets/royal-queen-seeds/RoyalQueenLogo-dark.svg'
import Sundance from '../../public/assets/royal-queen-seeds/Sundance.png'
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation"
import EmblaCarousel from '../../components/emblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import ProtectedImage from "../../components/protected-image"


export default function RoyalQueenSeeds() {

    const theme = useTheme();
    const { t } = useTranslation();
    const OPTIONS: EmblaOptionsType = {}

    const SLIDE_COUNT_INFLUENCER = 4
    const SLIDE_COUNT_MYTHS = 10
    const SLIDE_COUNT_MUNCHIES = 10
    const SLIDE_COUNT_ORGASMS = 5
    const SLIDE_COUNT_INSOMNIA = 5

    const SLIDES_INFLUENCER = Array.from(Array(SLIDE_COUNT_INFLUENCER).keys())
    const SLIDES_MYTHS = Array.from(Array(SLIDE_COUNT_MYTHS).keys())
    const SLIDES_MUNCHIES = Array.from(Array(SLIDE_COUNT_MUNCHIES).keys())
    const SLIDES_ORGASMS = Array.from(Array(SLIDE_COUNT_ORGASMS).keys())
    const SLIDES_INSOMNIA = Array.from(Array(SLIDE_COUNT_INSOMNIA).keys())

    return <MyContainer>
        <Head>
            <title>Royal Queen Seeds</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="md">
            <SummaryCard
                role="graphic_designer"
                company="Royal Queen Seeds"
                timeframe="TBD"
                teamstyle="solo_designer"
                tools="Adobe Creative Cloud - Illustrator, Photoshop, After Effects"
            >
            </SummaryCard>
            <br />
            <br />
            <br />
            <br />
            <br />
            {theme.palette.mode === "light" ?
                <ProtectedImage
                    src={RoyalQueenSeedsLogoLight}
                    alt="Logo for royal queen seeds"
                />
                :
                <ProtectedImage
                    src={RoyalQueenSeedsLogoDark}
                    alt="Logo for royal queen seeds"
                />
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            {theme.palette.mode === "light" ?
                <Image
                    src={undraw_hero_light}
                    alt="Logo for royal queen seeds"
                    width={745}
                    height={300}
                    loading="eager"
                />
                :
                <Image
                    src={undraw_hero_dark}
                    alt="Logo for royal queen seeds"
                    width={745}
                    height={300}
                    loading="eager"
                />
            }
        </Container>
        <Container maxWidth="sm">
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>{t("cannabis_influencer")}</Typography>
            <br />
            <EmblaCarousel slides={SLIDES_INFLUENCER} options={OPTIONS} type="influencer" />
            <br />
            <br />
            <br />
            <Typography variant='h4'>{t("cannamyths")}</Typography>
            <br />
            <EmblaCarousel slides={SLIDES_MYTHS} options={OPTIONS} type="cannamyths" />
            <br />
            <br />
            <br />
            <Typography variant='h4'>{t("munchies_attack")}</Typography>
            <br />
            <EmblaCarousel slides={SLIDES_MUNCHIES} options={OPTIONS} type="munchies" />
            <br />
            <br />
            <br />
            <Typography variant='h4'>{t("orgasms")}</Typography>
            <br />
            <EmblaCarousel slides={SLIDES_ORGASMS} options={OPTIONS} type="orgasms" />
            <br />
            <br />
            <br />
            <Typography variant='h4'>{t("insomnia")}</Typography>
            <br />
            <EmblaCarousel slides={SLIDES_INSOMNIA} options={OPTIONS} type="insomnia" />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>{t("sundance")}</Typography>
            <br />
            <Image
                    src={Sundance}
                    alt="Sundance Festival"
                    loading="eager"
                    style={{borderRadius: 4}}
                />
        </Container>
        <Container maxWidth="md">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h3'>{t("thanks_for_reading")}</Typography>
            <br />
            <br />
            <br />
            <br />
        </Container>
    </MyContainer>
}
