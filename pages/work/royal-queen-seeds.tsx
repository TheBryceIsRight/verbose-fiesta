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
import Insomnia1 from '../../public/assets/royal-queen-seeds/Insomnia_1.png'
import Insomnia2 from '../../public/assets/royal-queen-seeds/Insomnia_2.png'
import Insomnia3 from '../../public/assets/royal-queen-seeds/Insomnia_3.png'
import Insomnia4 from '../../public/assets/royal-queen-seeds/Insomnia_4.png'
import Insomnia5 from '../../public/assets/royal-queen-seeds/Insomnia_5.png'
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

    // Carousel 5
    const [emblaRef5, emblaApi5] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const scrollPrev5 = useCallback(() => {
        if (emblaApi5) emblaApi5.scrollPrev()
    }, [emblaApi5])
    const scrollNext5 = useCallback(() => {
        if (emblaApi5) emblaApi5.scrollNext()
    }, [emblaApi5])


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
            <br />
            <br />
            <Image
                src={RoyalQueenSeedsLogo}
                alt="Logo for royal queen seeds"
                width={745}
                height={300}
                loading="eager"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Image
                src={undraw_hero}
                alt="Hero image for royal queen seeds"
                loading="eager"
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
                        alt="Research: there are many different segments within the industry, such as : growing, reviewing products, smoking in your bedroom, breeding, educationational content, cannabis science, and so on. Decide which areas align best with your skills, knowledge, and personality, and hone in on that. Photo of a woman blowing a large smoke cloud with the caption: People have gained huge followings from this alone!"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Influencer3}
                        alt="Build Community: constant engagement with followers (replaying to and liking comments, frequent stories, and cross-platform posting will make people want to stick around, and learn, and soak in the entertainment."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Influencer4}
                        alt="Tag your favorite weed influencers in the comments!"
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
                        alt="Cannamyths: Clearing up myths about cannabis"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths10}
                        alt="Myth: cannabis use leads to higher levels of crimes. Reality: cannabis legislation hasn't appeared to contribute to any statistical rise in violent crime"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths3}
                        alt="Myth: Cannabis isn't addictive at all. Reality: while weed can help people in many different ways, cannabis use disorder is real"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths4}
                        alt="Myth: Cannabis users are lazy. Reality: Cannabis users face a host of different stereotypes."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths5}
                        alt="Myth: Cannabis is a gateway drug. Reality: millions of cannabis users around the world enjoy the herb regularly, without even entertaining the idea of harder drugs"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths6}
                        alt="Myth: Holding a hit will intensify your high. Reality: There's no science to support the idea that holding your hit increases the amount of THC absorbed"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths7}
                        alt="Myth: There isn't a cannabis withdrawal effect. Reality: Cannabis withdrawal is a real thing"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths8}
                        alt="Myth: Weed hangovers don't exist. Reality: Smoking half an ounce the night before comes with a hangover of its own"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths9}
                        alt="Myth: you can overdose on cannabis. Reality: To hit the pearly gates, you'd need to smoke about 1,500 lbs (680kg) of cannabis in about 15 minutes"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Cannamyths2}
                        alt="And you? What other cannabis myths would you debunk?"
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
                        alt="The attack: THC activates CB1 receptors (the ones that promote food intake) upon entering the body. Even odour processing is much stronger at the point of THC intoxication. That's why we created this handy guide - with our top tips to protect yourself! Source: The endocannabinoid system controls food intake via olfactory processes - PubMed https://pubmed.ncbi.nlm.nih.gov"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies3}
                        alt="1. Prevention: Make munchies inconvenient. Convenience is usually the shortest route to temptatation. Keep any form of junk food away from your home."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies4}
                        alt="2. Test your weapons: Try different strains. Take note of the ones that bring about the cravings, and ones that don't, and then go from there."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies5}
                        alt="3. Nutrition is key: Eat healthy food beforehand. Pick foods that will fill you up for the next few hours, such as those with high water content. For example: avodcado and toast, banana and peanut butter, yoghurt and granola."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies6}
                        alt="4. Take breaks: Stop during smoking. Keep yourself busy and productive. Example: learn a new skill, write in your journal, meditate..."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies7}
                        alt="5. Keep it fresh: Brush your teeth. Refreshing, mint-flavored toothpaste can kill these flavors in an instant. "
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies8}
                        alt="6. You're infected!: Get some exercise. Make sure you're not doing anything too extreme while impaired. Hitting a punching bag? YES. Going rock climbing? Not a good idea."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies9}
                        alt="7. Secret weapon: Try CBD oil. CBD oil has the potential to modulate THC's psychotropic effects. Source: Cannabidiol Inhibits Endocannabinoid Signaling in Autaptic Hippocampal Nurons - PubMed https://pubmed.ncbi.nlm.nih.gov"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Munchies10}
                        alt="What is your favourite food to eat when the munchies attack?"
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
                        alt="Women experience stronger contractions thoughout their stoned orgasm when compared to their sober orgasm. Cannabis edibles made this effect even stronger. Source: Can weed help you have better orgasms? - Vice https://tonic.vice.com"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms3}
                        alt="The endocannabinoid 2-arachidonoylglycerol was found to rise specifically during masturbation and orgasm. Source: Masturbation to orgasm stimulates the release of the endocannabinoid 2-arachidonoylglycerol in Humans - PubMed https://www.ncbi.nlm.nih.gov"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms4}
                        alt="By increasing your cannabinoid intake and stimulating the endocannabinoid system, you may experience greater arousal and greater orgasms to follow"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Orgasms5}
                        alt="If you too are happy to experiment with cannabis and sex, tell us, how was your experience? Share it! 😉"
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
            <br/>
            <br/>
            <br />
            <br />
            <Typography variant='h4'>Cannabis and insomnia</Typography>
            <br />
            <div style={emblaStyle} ref={emblaRef5}>
                <div style={emblaContainerStyle}>
                    <Image
                        src={Insomnia1}
                        alt="Insomnia"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Insomnia2}
                        alt="Insomnia is a common sleeping disorder that negatively impacts sleep onset, duration and quality. Among the various existing treatments, cannabis might also help since it has, relaxing, sometimes even sleepy, effects."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Insomnia3}
                        alt="Research showed that: Consumption of cannabis is linked to improvements in insomnia. THC and CBN are known for their ability to chill out the mind. Strains with more CBD are associated with better sleep. THC has sedative effects. Vigil JM, Stith SS, Diviant JP, Brokelmann F, Keeling K, Hall B. Effectiveness of Raw, Natural Medical Cannabis Flower for Treating Insomnia under Naturalistic Conditions. Medicines (Basel). 2018 Jul 11;5(3):75"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Insomnia4}
                        alt="Top 5 strains for insomnia are: Haze Berry, White Widow, Watermelon, Legendary OG Punch, and Special Kush 1."
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                    <Image
                        src={Insomnia5}
                        alt="Do you suffer from insomnia or any other sleeping issues?"
                        width={1000}
                        height={1251}
                        style={emblaSliderStyle}
                    />
                </div>
                <br />
                <IconButton
                    aria-label="Previous"
                    onClick={scrollPrev5}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton aria-label="Next" onClick={scrollNext5}>
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
