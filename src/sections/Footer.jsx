import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className='flex gap-3'>
                <a href='https://github.com/NeacsuBogdan?tab=repositories' target='_blank' rel='noopener noreferrer'>
                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200'>
                        <img src='/assets/github.svg' alt='GitHub' className='w-1/2 h-1/2'/>
                    </div>
                </a>
                <a href='https://www.instagram.com/notbogdan0/' target='_blank' rel='noopener noreferrer'>
                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200'>
                        <img src='/assets/instagram.svg' alt='Instagram' className='w-1/2 h-1/2'/>
                    </div>
                </a>
            </div>

            <p className='text-white-500'>© 2025 Bogdan. All rights reserved.</p>
        </section>
    )
}
export default Footer;
