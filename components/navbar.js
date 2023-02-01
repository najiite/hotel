import Link from "next/link"
import { useState, useEffect, } from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const HandleNav = () => {
        setNav(!nav)
    } 

    useEffect(()=>{
        const changeColor = () => {
            if (window.scrollY>=90) {
                setColor('#000106')

            }
            else {
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    const boxVariant = {
        hidden : {
            x: "-100vw",
        },
        visible : {
            x: 0, 
            transition: {
                duration: 1,
                when: "beforeChildren",
                delayChildren: 0.5,
                staggerChildren: 0.2 
            }
        } 
    } 
    const listVariant = {
        hidden : {
            x: -10,
            opacity: 0
        },
        visible : {
            x: 0,
            opacity: 1,
        }
    }

  return (
    <>
    
        <div  style={{backgroundColor: `${color}`}} className="fixed top-0 left-0 w-full z-10 ease-in duration-300 border-b-[1px] border-amber-100/20">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
                    <Link className=" mr-5" href='/'>
                        <h1  className="font-bold text-4xl">Hotel De' Nacka</h1>
                    </Link>
                    
                    <ul className="hidden sm:flex ml-10">
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/#features'><motion.span>Features</motion.span></Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/#rooms'>Rooms</Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/#about'>About Us</Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/#contact'>Contact</Link>
                        </motion.li>
                    </ul>
                    <a href='#book' className='hidden sm:flex border border-orange-300 border-2 py-3 px-6 hover:bg-orange-300 hover:text-white cursor-pointer'>Book A Room</a>
          
                    <div className="sm:hidden block z-10">
                        { nav ? <AiOutlineClose size={20} onClick={HandleNav}  style={{color: `white`}}/> : <AiOutlineMenu size={20}  onClick={HandleNav} />}
                        
                    </div>
                <motion.div 
                    className={nav ?"sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300": "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300" } 
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
            >
                    <ul>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#about'>Features</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#rooms'>Rooms</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#about'>About Us</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/#contact'>Contact</Link>
                        </motion.li>
                        <li className="mt-10">
                            <a href='#book' className=' sm:hidden text-center border-orange-300 border-2 py-3 px-6 hover:bg-orange-300 hover:text-white cursor-pointer'>Book A Room</a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Navbar