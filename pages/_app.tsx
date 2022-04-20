import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'boxicons/css/boxicons.min.css'
import { I18n, T } from 'react-polyglot-hooks';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import Image from 'next/image';
import Link from 'next/link';
// const phrases: any = {
//   en: en,
//   vn: vn,
// };
function MyApp({ Component, pageProps, router }: AppProps) {

  return <div className="App relative bg-app dark:bg-neutral-800 transition-all">
    {/* <div className="cursor" style={{ top: top, left: left }}></div> */}
    <div className="flex h-screen w-screen items-center justify-center relative">
      <div className="flex w-full items-start justify-center" style={{ height: "600px" }}>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={router.pathname} classNames='page' timeout={300}>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>

        <div className="rounded-3xl w-[300px] md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark flex items-center flex-col py-10 px-6">
          <div className="wrap-avatar dark:wrap-avatar-dark">
            <div className="avatar">
              {/* <div className='relative'> */}

              <Image
                src="/Logo.jpg"
                alt="Large Image"
                width={200}
                className="static"
                objectFit="cover"
                height={200}
              />
              {/* </div> */}
            </div>
          </div>
          <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">Nam Bùi</h1>
          <h1 className="text-gray-400 dark:text-white font-extrabold tracking-max text-xl">FRONT END DEV</h1>
          <ul>
            <Link href="/"><a><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><i className='bx bxs-home-alt-2 mr-3 text-xl' ></i><T phrase="home" /></li> </a></Link>

            <Link href="/work"><a><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5 px-9 !justify-start"><i className='bx bxs-briefcase mr-3 text-xl' ></i><T phrase="work" /></li></a></Link>
            <Link href="/skills"><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5"><i className='bx bxs-archive' ></i><T phrase="skill" /> </li></Link>
            <Link href="https://web3-blog.netlify.app/"><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5 justify-start"><i className='bx bxl-blogger mr-3 text-xl' ></i><T phrase="blog" /> </li></Link>
            <Link href="/contact"><li className="text-gray-600 dark:text-white font-bold btn-shadow dark:btn-shadow-dark w-48 h-10 rounded-2xl mt-5 !justify-start"><i className='bx bxs-contact mr-3 text-xl' ></i><T phrase="contact" /> </li></Link>
          </ul>
        </div>

      </div>
    </div>
  </div>



}

export default MyApp
