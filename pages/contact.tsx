import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function Contact() {
    const { t } = useTranslation('common')
    return (
        <div className=" rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full scroll-mb-1 p-6 relative " >
            <div className="border w-full h-[160px] mb-5 dark:border-dark">
                <div className='border-insite dark:border-dark-insite w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] p-3'>

                    <p className="text-black dark:text-white text-xl text-left font-bold smx:text-lg">{t("address")}: <span className='font-normal'>Hà Nội</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold smx:text-lg">{t("nativeland")}: <span className='font-normal'>Hưng Yên</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold smx:text-lg">{t("phonenumber")}: <span className='font-normal'>0355817589</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold smx:text-lg">{t("mail")}: <span className='font-normal'>bvnam98@gmail.com</span> </p>
                </div>
            </div>
            <div className="absolute top-[3.5rem] right-[4rem] border lg:w-[100px] h-[100px] lg:flex md:hidden mb-5 smx:hidden dark:border-dark">
                <img className='w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] !object-contain' src="/assets/img/nhan.png" alt="" />
            </div>
            <div className="border w-full h-[350px] mt-5 mb-5 dark:border-dark">
                <iframe title='address' className='border-insite dark:border-dark-insite' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0771457509413!2d105.78920931533224!3d21.02959899312467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4f25a5e0a9%3A0x26fe96003b912e52!2zQ8O0bmcgVmnDqm4gQ-G6p3UgR2nhuqV5!5e0!3m2!1sen!2s!4v1676433640609!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, width: "calc( 100% - 20px)", height: "calc( 100% - 20px)" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
