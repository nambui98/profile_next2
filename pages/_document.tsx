import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="vn">
                <Head>
                    <title>Profile NamBv</title>
                    <meta name="description" content="This is my profile" />
                    <meta name="og:" content="This is my profile" />
                    <link rel="icon" href="/photo3.jpg" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter"
                        rel="stylesheet"
                    />
                    <meta property="image" content="/photo3.jpg" />
                    <meta property="og:locale" content="vn" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Profile Nambv" />
                    <meta property="og:image" content="/photo3.jpg" />
                    <meta content="image/*" property="og:image:type" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument