import SummaryCard from "../../components/summary-card";
import MyContainer from "../../components/container";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation";
import Image from "next/image";
import Lineart1 from "../../public/assets/lineart/Lineart_01.png";
import Lineart2 from "../../public/assets/lineart/Lineart_02.png";
import Lineart3 from "../../public/assets/lineart/Lineart_03.png";
import Lineart4 from "../../public/assets/lineart/Lineart_04.png";
import Lineart5 from "../../public/assets/lineart/Lineart_05.png";
import Lineart6 from "../../public/assets/lineart/Lineart_06.png";
import Lineart7 from "../../public/assets/lineart/Lineart_07.png";
import Lineart8 from "../../public/assets/lineart/Lineart_08.png";
import Lineart9 from "../../public/assets/lineart/Lineart_09.png";
import Lineart10 from "../../public/assets/lineart/Lineart_10.png";
import Lineart11 from "../../public/assets/lineart/Lineart_11.png";
import Lineart12 from "../../public/assets/lineart/Lineart_12.png";
import Lineart13 from "../../public/assets/lineart/Lineart_13.png";
import Lineart14 from "../../public/assets/lineart/Lineart_14.png";
import Lineart15 from "../../public/assets/lineart/Lineart_15.png";



export default function MagazineIllustrations() {

    const theme = useTheme();
    const { t } = useTranslation();

    return <MyContainer>
        <Head>
            <title>Lineart Illustrations</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="lg">
            <SummaryCard
                role="illustrator"
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
                src={Lineart1}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart2}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart3}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart4}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart5}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart6}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br/>
            <br/>
            <Image
                src={Lineart7}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart8}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart9}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart10}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart11}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart12}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart13}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart14}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
            <br />
            <br />
            <Image
                src={Lineart15}
                alt="Article 1"
                style={{borderRadius: 4}}
            >
            </Image>
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
