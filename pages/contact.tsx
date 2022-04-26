import React from 'react';

export default function contact() {
    return (
        <div className="p-6 mx-4 relative">
            <div className="border w-full h-[160px] mb-5 dark:border-dark">
                <div className='border-insite dark:border-dark-insite w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] p-3'>

                    <p className="text-black dark:text-white text-xl text-left font-bold">Địa chỉ: <span className='font-normal'>Hà Nội</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold">Quê quán: <span className='font-normal'>Hưng Yên</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold">Số điện thoại: <span className='font-normal'>0355817589</span> </p>
                    <p className="text-black dark:text-white text-xl text-left font-bold">Mail: <span className='font-normal'>bvnam98@gmail.com</span> </p>
                </div>
            </div>
            <div className="absolute top-[3.5rem] right-[4rem] border lg:w-[100px] h-[100px] lg:flex md:hidden mb-5 smx:hidden dark:border-dark">
                <img className='w-[calc(100%_-_15px)] h-[calc(100%_-_15px)] !object-contain' src="/assets/img/nhan.png" alt="" />
            </div>
            <div className="border w-full h-[350px] mt-5 mb-5 dark:border-dark">
                <iframe title='address' className='border-insite dark:border-dark-insite' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9953604658476!2d105.85208121482006!3d20.992823094380373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac12ee34ca35%3A0xa48f99dde993dc90!2zTmcuIEfhu5FjIMSQ4buBLCBIb8OgbmcgVsSDbiBUaOG7pSwgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1649835609336!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, width: "calc( 100% - 20px)", height: "calc( 100% - 20px)" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
