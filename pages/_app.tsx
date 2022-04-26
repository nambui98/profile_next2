import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'boxicons/css/boxicons.min.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Setting from '../containers/Setting'
import Bubbles from '../components/bubbles/Bubbles'
import useTranslation from 'next-translate/useTranslation'
import { ThemeProvider } from '../containers/ThemeContext';
import { ColorProvider } from '../containers/ColorsContext';
import Loading from '../components/loading/Loading';
import Head from 'next/head';
function MyApp({ Component, pageProps, router }: AppProps) {
  const { t, lang } = useTranslation('common')
  const [loading, setLoading] = useState<boolean>(true)
  console.log(lang, t);

  // const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return <ThemeProvider>
    <ColorProvider>
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
      {
        loading ?
          <Loading /> : <div className=' bg-app dark:bg-neutral-800 transition-all'>
            <div className="fixed right-0 top-0 mr-4 mt-2 md:mt-6 z-10">
              <Setting />
            </div>
            <Bubbles />
            <div className="App relative">
              <div className="flex h-screen w-screen items-center justify-center relative">
                <div className="flex w-full items-start justify-center" style={{ height: "600px" }}>
                  <div className=" rounded-3xl md:w-6/12  sm:w-10/12 smx:w-10/12 h-full bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark ">
                    <SwitchTransition mode='out-in'>
                      <CSSTransition key={router.pathname} classNames='page' timeout={300}>
                        <Component {...pageProps} />
                      </CSSTransition>
                    </SwitchTransition>

                  </div>

                  <div className="rounded-3xl w-[300px] md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark flex items-center flex-col py-10 px-6">
                    <div className="wrap-avatar dark:wrap-avatar-dark">
                      <div className="avatar">
                        <img src="/Logo.jpg" alt="" />
                      </div>
                    </div>
                    <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">Nam Bùi</h1>
                    <h1 className="text-gray-400 dark:text-white font-extrabold tracking-max text-xl">FRONT END DEV</h1>
                    <ul>
                      <Link href="/"><a><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5  px-9 !justify-start"><i className='bx bxs-home-alt-2 mr-3 text-xl text-[var(--color)]' ></i>{t('home')}</li> </a></Link>

                      <Link href="/works"><a><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5 px-9 !justify-start"><i className='bx bxs-briefcase mr-3 text-xl' ></i>{t("work")}</li></a></Link>
                      <Link href="/skills"><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5  px-9 !justify-start"><i className='bx bxs-archive mr-3 text-xl' ></i>{t("skill")} </li></Link>
                      <a href="https://web3-blog.netlify.app/" target="_blank" rel="noreferrer"><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5  px-9 !justify-start"><i className='bx bxl-blogger mr-3 text-xl' ></i>{t("blog")}</li></a>
                      <Link href="/contact"><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5  px-9 !justify-start"><i className='bx bxs-contact mr-3 text-xl' ></i>{t("contact")} </li></Link>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
      }
    </ColorProvider >
  </ThemeProvider >




}

export default MyApp
