import React from "react";
import logo from '..//../images/logo.ico'

export default function Navbar() {
    const [show, setShow] = React.useState(false)
    const [fixed, setFixed] = React.useState(false)

    function toggle() {
        setShow(prev => !prev)
    }

    window.addEventListener("scroll", () => {
        window.scrollY >= 400
            ?
            setFixed(prev => prev = true)
            :
            setFixed(prev => prev = false)
    })
    const navClasses = `nav ${show ? "show" : ""} flex md:gap-4 items-center shadow-xl md:shadow-none absolute md:relative md:flex-row md:top-0 md:bg-transparent bg-white w-full md:w-fit left-0 flex-col top-[82.19px] h-0 md:h-full overflow-hidden duration-500`;
    const linksStyle = 'text-md text-[#1e1e1e] hover:text-[#ee626b] md:hover:text-slate-50 md:text-slate-50 py-4 md:py-2 px-5  md:hover:bg-[#ffffff1a]  duration-300 md:rounded-full block md:w-fit text-center border-t-2 border-[#ddd] md:border-0';
    const headerClasses = `p-5 ${fixed ? "fixed" : ""} z-50 absolute top-0 w-full`;


    const navData = [
        {
            id: 1,
            pageName: "Home",
        },
        {
            id: 2,
            pageName: "Our Shop",
        },
        {
            id: 3,
            pageName: "Product Details",
        },
        {
            id: 4,
            pageName: "Contact Us",
        },
    ]

    let navBar = navData.map(link => {
        return (
            <li className="w-full md:w-fit" key={link.id}>
                <a href="##" className={linksStyle}>{link.pageName}</a>
            </li>
        )
    })


    return (
        <header className={headerClasses}>
            <div className="container mx-auto flex justify-between items-center">
                <a href="##">
                    <img src={logo} alt="" className="w-[133px] md:w-[159px]" />
                </a>
                <input type="checkbox" id="checkbox" onClick={toggle} />
                <label htmlFor="checkbox" className="toggle md:hidden">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>

                <ul className={navClasses}>
                    {navBar}
                </ul>
            </div>
        </header>
    )
}