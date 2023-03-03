import SummaryCard from "../../components/summary-card";
import MyContainer from "../../components/container";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation";
import { CSSProperties, useContext } from "react";
import {
    LanguageContext,
    defaultLocale,
    locales,
} from '../../contexts/LanguageContext';

const videoWrapper = {
    paddingBottom: "56.25%",
    overflow: "hidden",
    position: "relative",
} as CSSProperties;

const iframeStyle = {
    overflow: "hidden",
    border: 0,
    alignSelf: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
} as CSSProperties;

export default function OmonovoAnimation() {

    const theme = useTheme();
    const { t } = useTranslation();
    const [locale, setLocale] = useContext(LanguageContext);


    return <MyContainer>
        <Head>
            <title>Omonovo Animation</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="md">
            <SummaryCard
                role="animator"
                company="Omonovo"
                timeframe="TBD"
                teamstyle="solo_designer"
                tools="Adobe Creative Cloud - Illustrator, Photoshop, After Effects"
            >
            </SummaryCard>
            <br />
            <br />
            <br />
        </Container>
        <Container maxWidth="md">
            <br />
            <Typography variant='h3'>{t("animation")}</Typography>
            <br />
            {locale === "en" ?
                <div style={videoWrapper}>
                    <iframe style={iframeStyle} width="560" height="315" src="https://www.youtube.com/embed/Vlk-2hbRtHE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
                :
                <div style={videoWrapper}>
                    <iframe style={iframeStyle} width="560" height="315" src="https://www.youtube.com/embed/uimrlqWa7Z8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
            }
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
