import React from 'react';

export default function Bottom() {
    return (
        <div className="bottom mt-44 mb-36 relative pt-20">
            <div className="container mx-auto items-center lg:items-start flex flex-col gap-10 lg:flex-row justify-between">
                <div className="leftBox max-w-[526px] rounded-3xl p-8 lg:p-14 bg-[#f7f7f7]">
                    <h2 className='text-[var(--secondary)] mb-4 font-bold'>OUR SHOP</h2>
                    <h1 className='text-4xl font-bold leading-tight mb-12'>Go Pre-Order Buy & Get Best <span className='text-[var(--primary)]'>Prices</span> For You!</h1>
                    <p className=' font-medium text-[#4a4a4a] mb-8'>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                    <a href='##' className='py-3 px-8 rounded-full text-white font-semibold bg-[var(--secondary)] block w-fit duration-300 hover:bg-[var(--primary)]'>SHOP NOW</a>
                </div>
                <div className="rightBox lg:self-end max-w-[526px] rounded-3xl p-8 lg:p-14 bg-[#f7f7f7]">
                    <h2 className='text-[var(--secondary)] mb-4 font-bold'>NEWSLETTER</h2>
                    <h1 className='text-4xl font-bold leading-tight mb-12'>Get Up To $100 Off Just Buy <span className='text-[var(--primary)]'>Subscribe</span> Newsletter!</h1>
                    <div className="form md:w-96 relative">
                        <input type="text" name="" className='h-12 rounded-full focus:outline-none text-[#7a7a7a] text-sm px-6 w-full' placeholder='your email' />
                        <button className='uppercase text-slate-50 absolute right-0 h-12 bg-[#ee626b] rounded-full px-4 text-sm font-medium hover:bg-[var(--primary)] duration-300'>subscribe now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}