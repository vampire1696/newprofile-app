import React, { Component } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link';


export default function UserId() {
  //learn about change page and router
    const router = useRouter();
    console.log(router.query.id);

    const clicked = () => {router.push("/about")}
    return (
    <>
    <div>userID : {router.query.id} </div>
    <button onClick={clicked}>go to homepage</button>
    <Link href={"/about"}><button>go to homepage222</button></Link>
    </>
  )
}
