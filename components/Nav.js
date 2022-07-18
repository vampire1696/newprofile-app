import Link from 'next/link'
import React from 'react'
import style from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={style.navbar}>
    <div><Link href="/"><a>Home</a></Link></div>
    <div><Link href="/about"><a>About</a></Link></div>
    <div><Link href="/profile"><a>Profile</a></Link></div>
    </nav>
  )
}
export default Nav