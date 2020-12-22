import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <div>{props.children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
