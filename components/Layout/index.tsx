import Head from 'next/head';

type Props = {
  className?: string;
  children: React.ReactNode;
  desc?: string;
  title: string;
  thumb?: string;
};

export default function Layout({
  className,
  children,
  title,
  desc,
  thumb,
}: Props) {
  const description = desc || 'A Next.js multilingual site';
  const thumbnail = thumb || '/img/default-thumb.png';

  return (
    <main className={className}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={thumbnail} />
      </Head>
      {children}
    </main>
  );
}