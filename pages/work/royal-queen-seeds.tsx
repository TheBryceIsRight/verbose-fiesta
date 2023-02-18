import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useState } from "react"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import Autoplay from 'embla-carousel-autoplay'
import undraw_hero from '../../public/assets/royal-queen-seeds/RoyalQueenSeedsUndraw.svg'
import Influencer1 from '../../public/assets/royal-queen-seeds/Influencer_1.png'
import Influencer2 from '../../public/assets/royal-queen-seeds/Influencer_2.png'
import Influencer3 from '../../public/assets/royal-queen-seeds/Influencer_3.png'
import Influencer4 from '../../public/assets/royal-queen-seeds/Influencer_4.png'
import Cannamyths1 from '../../public/assets/royal-queen-seeds/Cannamyths_1.png'
import Cannamyths2 from '../../public/assets/royal-queen-seeds/Cannamyths_2.png'
import Cannamyths3 from '../../public/assets/royal-queen-seeds/Cannamyths_3.png'
import Cannamyths4 from '../../public/assets/royal-queen-seeds/Cannamyths_4.png'
import Cannamyths5 from '../../public/assets/royal-queen-seeds/Cannamyths_5.png'
import Cannamyths6 from '../../public/assets/royal-queen-seeds/Cannamyths_6.png'
import Cannamyths7 from '../../public/assets/royal-queen-seeds/Cannamyths_7.png'
import Cannamyths8 from '../../public/assets/royal-queen-seeds/Cannamyths_8.png'
import Cannamyths9 from '../../public/assets/royal-queen-seeds/Cannamyths_9.png'
import Cannamyths10 from '../../public/assets/royal-queen-seeds/Cannamyths_10.png'
import Munchies1 from '../../public/assets/royal-queen-seeds/Munchies_1.png'
import Munchies2 from '../../public/assets/royal-queen-seeds/Munchies_2.png'
import Munchies3 from '../../public/assets/royal-queen-seeds/Munchies_3.png'
import Munchies4 from '../../public/assets/royal-queen-seeds/Munchies_4.png'
import Munchies5 from '../../public/assets/royal-queen-seeds/Munchies_5.png'
import Munchies6 from '../../public/assets/royal-queen-seeds/Munchies_6.png'
import Munchies7 from '../../public/assets/royal-queen-seeds/Munchies_7.png'
import Munchies8 from '../../public/assets/royal-queen-seeds/Munchies_8.png'
import Munchies9 from '../../public/assets/royal-queen-seeds/Munchies_9.png'
import Munchies10 from '../../public/assets/royal-queen-seeds/Munchies_10.png'
import Orgasms1 from '../../public/assets/royal-queen-seeds/Orgasms_1.png'
import Orgasms2 from '../../public/assets/royal-queen-seeds/Orgasms_2.png'
import Orgasms3 from '../../public/assets/royal-queen-seeds/Orgasms_3.png'
import Orgasms4 from '../../public/assets/royal-queen-seeds/Orgasms_4.png'
import Orgasms5 from '../../public/assets/royal-queen-seeds/Orgasms_5.png'
import RoyalQueenSeedsLogo from '../../public/assets/royal-queen-seeds/RoyalQueenLogo.svg'



import { IconButton } from "@mui/material"

const emblaStyle = {
    overflow: 'hidden'
}

const emblaContainerStyle = {
    display: 'flex'
}

const emblaSliderStyle = {
    flex: "0 0 100%",
    minWidth: "0",
}

const autoplayOptions = {
    delay: 8000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
}


export default function RoyalQueenSeeds() {

    // Carousel 1
    const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

    const scrollPrev1 = useCallback(() => {
        if (emblaApi1) emblaApi1.scrollPrev()
    }, [emblaApi1])

    const scrollNext1 = useCallback(() => {
        if (emblaApi1) emblaApi1.scrollNext()
    }, [emblaApi1])


    // Carousel 2
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

    const scrollPrev2 = useCallback(() => {
        if (emblaApi2) emblaApi2.scrollPrev()
    }, [emblaApi2])

    const scrollNext2 = useCallback(() => {
        if (emblaApi2) emblaApi2.scrollNext()
    }, [emblaApi2])


    // Carousel 3
    const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

    const scrollPrev3 = useCallback(() => {
        if (emblaApi3) emblaApi3.scrollPrev()
    }, [emblaApi3])

    const scrollNext3 = useCallback(() => {
        if (emblaApi3) emblaApi3.scrollNext()
    }, [emblaApi3])


    // Carousel 4
    const [emblaRef4, emblaApi4] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

    const scrollPrev4 = useCallback(() => {
        if (emblaApi4) emblaApi4.scrollPrev()
    }, [emblaApi4])

    const scrollNext4 = useCallback(() => {
        if (emblaApi4) emblaApi4.scrollNext()
    }, [emblaApi4])


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
                role="Graphic Designer"
                company="Royal Queen Seeds"
                timeframe="TBD"
                teamstyle="Solo Designer"
                tools="Adobe Creative Cloud - Illustrator, Photoshop, After Effects"
            >
            </SummaryCard>
            <br />
            <br />
            <br />
            <Image
                src={RoyalQueenSeedsLogo}
                alt="Logo for royal queen seeds"
                width={745}
                height={300}
            />
            <br />
            <br />
            <br />
            <br />
            <Image
                src={undraw_hero}
                alt="Hero image for royal queen seeds"
            />
        </Container>
        <Container maxWidth="sm">
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>How to become a cannabis influencer</Typography>
            <br />
            <div style={emblaStyle} ref={emblaRef1}>
                <div style={emblaContainerStyle}>
                    <Image
                        src={Influencer1}
                        alt="How to become a cannabis influencer"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Influencer2}
                        alt="Research: there are many different segments within the industry"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Influencer3}
                        alt="Build Community: constant engagement with followers"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Influencer4}
                        alt="Tag your favorite influencers in the comments!"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                </div>
                <br />
                <IconButton
                    aria-label="Previous"
                    onClick={scrollPrev1}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton aria-label="Next" onClick={scrollNext1}>
                    <ChevronRight />
                </IconButton>
            </div>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Cannamyths: clearing up myths about cannabis</Typography>
            <br />
            <div style={emblaStyle} ref={emblaRef2}>
                <div style={emblaContainerStyle}>
                    <Image
                        src={Cannamyths1}
                        alt="Cannamyths: clearing up myths about cannabis"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths10}
                        alt="Reality: cannabis legislation hasn't appeared to contribute to any statistical rise in violent crime"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths3}
                        alt="Reality: while weed can help people in many different ways, cannabis use disorder is real"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths4}
                        alt="Reality: millions of cannabis users around the world enjoy the herb regularly, without even entertaining the idea of harder drugs"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths5}
                        alt="Reality: There's no science to support the idea that holding your hit increases the amount of THC absorbed"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths6}
                        alt="Reality: Cannabis withdrawal is a real thing"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths7}
                        alt="Smoking half an ounce the night before comes with a hangover of its own"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths8}
                        alt="To hit the pearly gates, you'd need to smoke about 1,500 lbs (680kg) of cannabis in about 15 minutes"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths9}
                        alt="And you? What other cannabis myths would you debunk?"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths2}
                        alt="Tag your favorite influencers in the comments!"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                </div>
                <br />
                <IconButton
                    aria-label="Previous"
                    onClick={scrollPrev2}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton aria-label="Next" onClick={scrollNext2}>
                    <ChevronRight />
                </IconButton>
            </div>
            <br />
            <br />
            <Typography variant='h4'>Attack of the munchies</Typography>
            <br />
            <div style={emblaStyle} ref={emblaRef3}>
                <div style={emblaContainerStyle}>
                    <Image
                        src={Munchies1}
                        alt="Attack of the munchies"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies2}
                        alt="The attack"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies3}
                        alt="Prevention"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies4}
                        alt="Test your weapons"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies5}
                        alt="Nutrition is key"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies6}
                        alt="Take breaks"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies7}
                        alt="Keep it fresh"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies8}
                        alt="You're infected"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies9}
                        alt="Secret weapon: CBD oil"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies10}
                        alt="What is your favorite food to eat when the munchies attack?"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                </div>
                <br />
                <IconButton
                    aria-label="Previous"
                    onClick={scrollPrev3}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton aria-label="Next" onClick={scrollNext3}>
                    <ChevronRight />
                </IconButton>
            </div>
            <br />
            <br />
            <Typography variant='h4'>Cannabis and orgasms</Typography>
            <br />
            <div style={emblaStyle} ref={emblaRef4}>
                <div style={emblaContainerStyle}>
                    <Image
                        src={Orgasms1}
                        alt="Cannabis and orgasms"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms2}
                        alt="Women experience stronger contractions"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms3}
                        alt="The endocannabinoid 2-arachidonoylglycerol was found to rise specifically during masturbation and orgasm"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms4}
                        alt="By increasing your cannabinoid intake and stimulating the endocannabinoid system"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms5}
                        alt="What was your experience?"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                </div>
                <br />
                <IconButton
                    aria-label="Previous"
                    onClick={scrollPrev4}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton aria-label="Next" onClick={scrollNext4}>
                    <ChevronRight />
                </IconButton>
            </div>
        </Container>
        <Container maxWidth="md">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h3'>Thank you for reading!</Typography>
            <br />
            <br />
            <br />
            <br />
        </Container>
    </MyContainer>
}
