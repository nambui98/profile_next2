import React, { useState } from 'react'
// import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import colors from 'tailwindcss/colors'
import { ThemeContext } from '../ThemeContext';
// import vietnamimg from '/assets/img/vietnam.png'
// import usaimg from '/assets/img/united-states.png'
import setLanguage from 'next-translate/setLanguage'
import { Color, useColor } from '../ColorsContext';
import useTranslation from 'next-translate/useTranslation';
export default function Setting() {
    const { lang } = useTranslation('common')
    const { theme, setTheme } = React.useContext(ThemeContext);
    const { color, setColor } = useColor();
    const [active, setActive] = useState(false)

    return (<div className={`relative transform duration-500 ${active ? "translate-x-0" : "translate-x-40"}`}>
        <button className="btn-shadow dark:btn-shadow-dark-50 bg-app dark:bg-neutral-800 setting -left-[12rem] top-4 rounded-full text-center w-10 h-10" onClick={() => setActive(!active)}>
            <i className={`bx bxs-cog animate-spin duration-1000 text-3xl text-gray-500`} style={{ animationDuration: "2s" }}></i>
        </button>
        <div className={`absolute w-[145px] top-0 right-0 rounded-3xl flex justify-between flex-wrap p-3 shadow-3xl bg-app dark:bg-neutral-800 dark:shadow-3xl-dark`} >
            <button className="mr-2 btn-shadow dark:btn-shadow-dark-50 btn-setting rounded-full text-center w-12 h-12" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                    <i className='bx bxs-sun text-gray-500  text-2xl cursor-pointer dark'></i>
                ) : (
                    <i className='bx bxs-moon text-gray-500  text-2xl cursor-pointer light' ></i>
                )}
            </button>
            <button className="top-6 right-6 border w-12 h-12 dark:border-dark !rounded-3xl" onClick={async () => await setLanguage(lang == "vn" ? 'en' : "vn")}>
                <img className='w-[calc(100%_-_10px)] h-[calc(100%_-_10px)]' src={lang === "vn" ? "/assets/img/vietnam.png" : "/assets/img/united-states.png"} alt="" />
            </button>
            <div className="border w-full h-[160px] mt-3 dark:border-dark">
                <div className='border-insite dark:border-dark-insite w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] p-2 flex justify-between flex-wrap'>
                    {
                        Object.keys(Color).map(function (key, index) {
                            return <button
                                key={index}
                                onClick={() => setColor(Color[key])}
                                className={`w-[40px] h-[40px] rounded-xl settingcolor color${index + 1} ${color === Color[key] ? "active" : ""}`}></button>
                        })
                    }

                    {/* <button className="w-[40px] h-[40px] rounded-xl settingcolor color2 active"></button>
                    <button className="w-[40px] h-[40px] rounded-xl settingcolor color3"></button>
                    <button className="w-[40px] h-[40px] rounded-xl settingcolor color4"></button>
                    <button className="w-[40px] h-[40px] rounded-xl settingcolor color5"></button>
                    <button className="w-[40px] h-[40px] rounded-xl settingcolor color6"></button> */}
                </div>
            </div>
        </div>
    </div >
    )
}
