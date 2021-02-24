import { useEffect, useState } from "react"
import Head from "next/head"
import Layout from "components/Layout"
import Header from "components/Header"
import Navbar from "components/Navbar"
import "styles/reset.css"
import "styles/global.css"

import useUser, { USER_STATE } from "hooks/useUser"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps, title }) {
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    user === null && router.replace("/")
  }, [user])

  return (
    <>
      <Head>{title}</Head>
      <Layout>
        {user && <Header title={title} />}
        <Component {...pageProps} />
        {user && <Navbar />}
      </Layout>
    </>
  )
}

export default MyApp
