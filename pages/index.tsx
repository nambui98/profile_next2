import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { T } from 'react-polyglot-hooks'
const colors = require('tailwindcss/colors')
const routes = [
  { path: '*', name: 'Home' },
  { path: '/', name: 'Home' },
  { path: '/contact', name: 'Contact' },
  { path: '/work', name: 'Work' },
  { path: '/skills', name: 'Skills' },
]
const Home: NextPage = () => {
  const router = useRouter();
  const print = (pdf: string) => {
    var iframe: HTMLIFrameElement = document.createElement('iframe');
    // Hide the IFrame.  
    iframe.style.visibility = "hidden";
    // Define the source.  
    iframe.src = pdf;
    // Add the IFrame to the web page.
    document.body.appendChild(iframe);
    iframe?.contentWindow?.focus();
    iframe?.contentWindow?.print();
  }
  return (
    <>
      <Head>
        <title>Profile NamBv</title>
        <meta name="description" content="This is my profile" />
        <meta name="og:" content="This is my profile" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
        <meta property="image" content="/Logo.jpg" />
        <meta property="og:locale" content="vn" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Profile Nambv" />
        <meta property="og:image" content="/Logo.jpg" />
        <meta content="image/*" property="og:image:type" />
      </Head>


      <div className="relative rounded-3xl md:w-6/12 sm:w-10/12 smx:w-10/12 p-6 h-full mx-4 bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark flex justify-center items-center flex-col">
        <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
        <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>
        <div className="flex mt-4">
          <a href='https://www.facebook.com/songoku.bui/' target="_blank" rel="noreferrer" className="btn-shadow dark:btn-shadow-dark fb rounded-full text-center w-14 h-14"><i className='bx bxl-facebook text-3xl' style={{ color: colors.coolGray[400] }}></i></a>
          <a href='https://www.instagram.com/nambui27/' target="_blank" rel="noreferrer" className="btn-shadow dark:btn-shadow-dark itg rounded-full text-center w-14 h-14 mx-5"><i className='bx bxl-instagram-alt text-3xl' style={{ color: colors.coolGray[400] }}></i></a>
          <a href='mailto:bvnam98@gmail.com' target="_blank" rel="noreferrer" className="btn-shadow dark:btn-shadow-dark gg rounded-full text-center w-14 h-14"><i className='bx bxl-google text-3xl' style={{ color: colors.coolGray[400] }}></i></a>
        </div>
        <div className="absolute bottom-10 2xl:right-20 2xl:left-20 md:right-10 md:left-10 flex items-center smx:flex-col smx:items-start justify-between">
          <span className="flex items-center ">
            <a
              href='/cv.pdf'
              className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"
            ><i className='bx bxl-facebook text-xl' style={{ color: "var(--color)" }}></i>

            </a>
            <span className="ml-2 dark:text-white"><T phrase='downloadcv' /></span></span>
          <span className="flex flex-row-reverse smx:flex-row smx:mt-2 items-center" ><button onClick={() => print('cv.pdf')} className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"><i className='bx bxs-printer text-xl' style={{ color: "var(--color)" }}></i></button><span className="mr-2 smx:ml-2 dark:text-white"><T phrase='printmyresum' /></span></span>
        </div>
      </div>
    </>
  )
}

export default Home
