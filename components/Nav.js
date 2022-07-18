import React from 'react'
import style from '../styles/Navbar.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={style.nav}>
    
    <div><Link href="/"><a>Home</a></Link> </div>
    
    <div><Link href="/about"><a>About</a></Link> </div>
    <div><Link href="/profile"><a>Profile</a></Link> </div>
    
    </div>
  )
}

export default Nav