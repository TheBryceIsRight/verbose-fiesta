import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta charSet="utf-8"></meta>
        <meta property="og:type" content="blog"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <meta property="twitter:image:alt" content="Hogsmeade by Sandra Benito, graphite"></meta>
        <meta property="twitter:image" content="https://res.cloudinary.com/bryce-portfolio/image/upload/v1676570779/hogsmeade_wnyi3p.jpg"></meta>
        <meta property="og:image" content="https://res.cloudinary.com/bryce-portfolio/image/upload/v1676570779/hogsmeade_wnyi3p.jpg"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="Sandra Benito's Design Portfolio"></meta>
        <meta property="twitter:description" content="My portfolio"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:title" content="Sandra Benito's Design Portfolio"></meta>
        <meta property="og:description" content="My portfolio"></meta>
        <meta property="og:image:width" content="1446"></meta>
        <meta property="og:site_name" content="Sandra Benito's Design Portfolio"></meta>
        <meta property="og:image:height" content="1024"></meta>
        <meta property="article:author" content="Sandra Benito Junyent"></meta>
        <meta property="og:url" content="https://sandra-benito-portfolio.vercel.app/"></meta>
    </Head>
  )
}

export default Meta
