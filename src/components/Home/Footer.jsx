import React from 'react';

export default function Footer() {

    let Year = new Date().getFullYear()

    return (
        <footer>
            <p className='text-center bg-[var(--primary)] text-slate-50 py-12 rounded-t-[100px]'>Copyright © {Year} LUGX Gaming Company. All rights reserved. Created: <span className='font-semibold'>elsayedKewan</span></p>
        </footer>
    )
}