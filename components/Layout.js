import React from 'react'
import Navi from './Nav'


const Layout = ({children}) => {
  return (
    <div>    
    <Navi/>
    <div>{children}</div>
    </div>
  )
}

export default Layout