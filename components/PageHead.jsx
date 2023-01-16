import Head from "next/head"
// component that returns head tag for the page
export const PageHead = ({siteTitle, metatags}) => {
    return (
        <Head>
          <title>{siteTitle}</title>
          <meta
              name={"description"}
              content={metatags.description}
            />
            <meta
              property="og:image"
              content={metatags.imageUrl}
            //   content={`https://og-image.vercel.app/${encodeURI(
            //     siteTitle,
            //   )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}