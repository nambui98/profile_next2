import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Suspense } from 'react'
import Loading from '../components/loading/Loading'
import useTranslation from 'next-translate/useTranslation'
const routes = [
  { path: '*', name: 'Home' },
  { path: '/', name: 'Home' },
  { path: '/contact', name: 'Contact' },
  { path: '/work', name: 'Work' },
  { path: '/skills', name: 'Skills' },
]
type item = {
  title: string,
  link: string,
  image: string,
  type?: string
}
const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  const { t } = useTranslation('common')
  const data: item[] = [
    {
      title: "Befitter app",
      link: "http://cdn.befitter.io/downloadapp/ ",
      image: "assets/img/befitter_app.jpg",
      type: 'mobile'
    },

    {
      title: "Befitter website",
      link: "https://befitter.io/",
      image: "assets/img/befitter.png"
    },
    {
      title: "Iok chương trình thi topik online",
      link: "https://iok.vn",
      image: "/assets/img/iok.png"
    },
    {
      title: "Dự án ERP",
      link: "http://172.105.120.33:6004/",
      image: "/assets/img/bavinn.png"
    },
    {
      title: "Làm phần CMS cho webside đặt vé máy bay",
      link: "https://www.vietravelairlines.com/vn/vi",
      image: "/assets/img/vtva.png"
    },
    {
      title: "FE NFT design trên figma",
      link: "https://nft-flame-phi.vercel.app/",
      image: "/assets/img/nft.png"
    },
    {
      title: "Làm thử đồng coin",
      link: "https://namcoin.vercel.app/",
      image: "/assets/img/coin2.png"
    },
    {
      title: "Trang portfolio cá nhân",
      link: "https://namportfolio.netlify.app/",
      image: "/assets/img/portpolio.png"
    },
    {
      title: "Tran paralax design trên figma",
      link: "https://parallaxnambv.netlify.app/",
      image: "/assets/img/paralax.png"
    },
  ]
  return (
    <div className=" rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full p-6">
      <Head>
        <title>Profile NamBv</title>
      </Head>


      <p className='text-black dark:text-white text-xl text-left font-bold mb-2'>{t("works")}</p>
      {/* <img className="w-full" src={IOK} alt="Sunset in the mountains" /> */}
      <div className='w-full h-[calc(100%_-_40px)] overflow-y-auto flex justify-between flex-wrap scrollbar'>
        {
          data.map((item, index) => <a key={index} href={item.link} title={item.title} target="_blank" rel="noreferrer" className="border lg:w-[calc(50%_-_10px)] w-full mb-5 dark:border-dark h-[240px]">
            <img className={`w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ${item.type === "mobile" ? '!object-contain' : ''}`} src={item.image} alt="" />
          </a>)
        }
      </div>
    </div>
  )
}

export default Home
