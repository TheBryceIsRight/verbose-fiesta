import SummaryCard from "../../components/summary-card";
import MyContainer from "../../components/container";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation";
import Image from "next/image";
import Zobeida1 from "../../public/assets/zobeida/Zobeida_01.png"
import Zobeida2 from "../../public/assets/zobeida/Zobeida_02.png"
import Zobeida3 from "../../public/assets/zobeida/Zobeida_03.png"
import Zobeida4 from "../../public/assets/zobeida/Zobeida_04.png"
import Zobeida5 from "../../public/assets/zobeida/Zobeida_05.png"


export default function Zobeida() {

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
                src={Zobeida1}
                alt="Coffee 1"
                style={{borderRadius: 4}}
                loading="eager"
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Zobeida2}
                alt="Coffee 2"
                style={{borderRadius: 4}}
                loading="eager"
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Zobeida3}
                alt="Coffee 3"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Zobeida4}
                alt="Coffee 4"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Zobeida5}
                alt="Coffee 5"
                style={{borderRadius: 4}}
                placeholder='blur'
            >
            </Image>
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
