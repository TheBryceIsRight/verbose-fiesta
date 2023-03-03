import SummaryCard from "../../components/summary-card";
import MyContainer from "../../components/container";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation";
import Image from "next/image";
import Patterns1 from "../../public/assets/patterns/Patterns_01.png";
import Patterns2 from "../../public/assets/patterns/Patterns_02.png";
import Patterns3 from "../../public/assets/patterns/Patterns_03.png";
import Patterns4 from "../../public/assets/patterns/Patterns_04.png";
import Patterns5 from "../../public/assets/patterns/Patterns_05.png";
import Patterns6 from "../../public/assets/patterns/Patterns_06.png";
import Patterns7 from "../../public/assets/patterns/Patterns_07.png";
import Patterns8 from "../../public/assets/patterns/Patterns_08.png";
import Patterns9 from "../../public/assets/patterns/Patterns_09.png";
import Patterns10 from "../../public/assets/patterns/Patterns_10.png";
import Patterns11 from "../../public/assets/patterns/Patterns_11.png";
import Patterns12 from "../../public/assets/patterns/Patterns_12.png";
import Patterns13 from "../../public/assets/patterns/Patterns_13.png";
import Patterns14 from "../../public/assets/patterns/Patterns_14.png";
import Patterns15 from "../../public/assets/patterns/Patterns_15.png";
import Patterns16 from "../../public/assets/patterns/Patterns_16.png";
import Patterns17 from "../../public/assets/patterns/Patterns_17.png";
import Patterns18 from "../../public/assets/patterns/Patterns_18.png";
import Patterns19 from "../../public/assets/patterns/Patterns_19.png";
import Patterns20 from "../../public/assets/patterns/Patterns_20.png";
import Patterns21 from "../../public/assets/patterns/Patterns_21.png";
import Patterns22 from "../../public/assets/patterns/Patterns_22.png";
import Patterns23 from "../../public/assets/patterns/Patterns_23.png";
import Patterns24 from "../../public/assets/patterns/Patterns_24.png";
import ProtectedImage from "../../components/protected-image";



export default function PatternDesigns() {

    const theme = useTheme();
    const { t } = useTranslation();

    return <MyContainer>
        <Head>
            <title>Pattern Designs</title>
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
                company="Design Internship"
                timeframe="TBD"
                teamstyle="solo_designer"
                tools="Adobe Creative Cloud - Illustrator, Photoshop"
            >
            </SummaryCard>

        </Container>
        <Container maxWidth="lg">
            <br />
            <br />
            <br />
            <Image
                src={Patterns1}
                alt="Line art 1"
                style={{ borderRadius: 4 }}
                loading="eager"
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns3}
                alt="Line art 3"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns4}
                alt="Line art 4"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns5}
                alt="Line art 5"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns6}
                alt="Line art 6"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns7}
                alt="Line art 7"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns8}
                alt="Line art 8"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns9}
                alt="Line art 9"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns10}
                alt="Line art 10"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns11}
                alt="Line art 11"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns12}
                alt="Line art 12"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns13}
                alt="Line art 13"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns14}
                alt="Line art 14"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns15}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns16}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns17}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns18}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns19}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns20}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns21}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns22}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Patterns23}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <ProtectedImage
                src={Patterns24.src}
                alt="Patterns"
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
