import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import atlanta from '../../public/assets/blog/aboutme/ATL.svg'
import coffee from '../../public/assets/blog/aboutme/coffee.png'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"


export default function Aboutme() {
    return <MyContainer>
        <Head>
            <title>About Me</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant='h3'>About Me</Typography>
        <br />
        <Typography variant='h5'>I'm a UX Designer living in Atlanta, Georgia. I love helping create intuitive, efficient, accessible experiences in consumer software though UX Design and Full Stack development.
        </Typography>
        <br />
        <br />
        <Container maxWidth="xl">
            <br />
            <br />
            <br />
            <ProtectedImage src={atlanta} alt="Atlanta vectorized, drawn in Figma"/>
            <br />
            <Typography variant="body1">My hometown, drawn in Figma. 
            </Typography>
            <Typography variant="caption">© {new Date().getFullYear()} · Bryce Watson · All Rights Reserved </Typography>
            <br />
            <br />
            <br />
            <br />
            <Image
                src={coffee}
                alt="Me serving coffee next to a Kyoto brewer"
                style={{ borderRadius: 6 }}
            />
            <br />
            <Typography variant="body1">Photo Credit Georgia Tech Institute Communications
            </Typography>
            <br />
            <br />
        </Container>
        <Container maxWidth="lg">

            <br />
            <br />
            <br />
            <br />
        </Container>
        <br />
        <br />
        <br />
        <br />
    </MyContainer>
}
