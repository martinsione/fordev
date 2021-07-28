import { useEffect } from "react"
import Head from "next/head"
import Layout from "components/Layout"
import Header from "components/Header"
import Navbar from "components/Navbar"
import "styles/reset.css"
import "styles/global.css"

import useUser, { USER_STATE } from "hooks/useUser"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    user === USER_STATE.NOT_LOGGED && router.replace("/")
  }, [user])

  return (
    <>
      <Layout>
        {user && <Header title={"fordev"} />}
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
        {user && <Navbar />}
      </Layout>
    </>
  )
}

export default MyApp
