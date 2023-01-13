import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'


const firstPost = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>First post</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

            <div>
                <h1>First post :)</h1>
                <h2>Second post</h2>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </div>
            </Layout>
        </>
    )
}

export default firstPost;