import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'


const firstPost = () => {
    return (
        <>
            <Head>
                    <title>First post</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/* <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                /> */}
            <div>
                <h1>First post :)</h1>
                <h2>Second post</h2>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </div>
        </>
    )
}

export default firstPost;