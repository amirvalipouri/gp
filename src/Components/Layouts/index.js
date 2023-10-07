import React from 'react'
import Header from './Header'
import styles from './Layout.module.scss'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className={`${styles.layout}`}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout