import SummaryCard from "../../components/summary-card";
import MyContainer from "../../components/container";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation";
import Image from "next/image";
import Coffee1 from "../../public/assets/az-coffee/Az_Coffee_01.png"
import Coffee2 from "../../public/assets/az-coffee/Az_Coffee_02.png"
import Coffee3 from "../../public/assets/az-coffee/Az_Coffee_03.png"
import Coffee4 from "../../public/assets/az-coffee/Az_Coffee_04.png"
import Coffee5 from "../../public/assets/az-coffee/Az_Coffee_05.png"
import CoffeeGuide from "../../public/assets/az-coffee/Guide.png"



export default function MagazineIllustrations() {

    const theme = useTheme();
    const { t } = useTranslation();

    return <MyContainer>
        <Head>
            <title>Coffee Designs</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="lg">
            <SummaryCard
                role="graphic_designer"
                company="Tot Sant Cugat"
                timeframe="TBD"
                teamstyle="solo_designer"
                tools="Adobe Creative Cloud - Illustrator, Photoshop, After Effects"
            >
            </SummaryCard>
            <br />
            <br />
            <br />
            <Image
                src={CoffeeGuide}
                alt="Coffee 1"
                style={{borderRadius: 4}}
                loading="eager"
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Coffee1}
                alt="Coffee 2"
                style={{borderRadius: 4}}
                loading="eager"
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Coffee2}
                alt="Coffee 3"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Coffee3}
                alt="Coffee 4"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Coffee4}
                alt="Coffee 5"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Coffee5}
                alt="Coffee 6"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
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
