import { useState, useEffect } from "react"
import style from "styles/Index.module.css"
import Button from "components/Button"
import Github from "components/Icons/Github"

import useUser, { USER_STATE } from "hooks/useUser"
import { loginWithGithub } from "firebase/client"
import { useRouter } from "next/router"
import Head from 'next/head'

export default function Index() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGithub().catch((err) => console.log(err))
  }
  return (
    <>
      <Head>
        <title>Fordev</title>
      </Head>
      {user === USER_STATE.LOADING && <div></div>}
      {user === USER_STATE.NOT_LOGGED && (
        <section className={style.container}>
          <img
            src="/fordevs-logo.png"
            alt="fordevs logo"
            className={style.img}
          />
          <h1>ForDevs</h1>
          <h3>Talk about development with devlopers</h3>
          <Button onClick={handleClick}>
            <Github fill={"#fff"} width={20} height={20} />
            Login with Github
          </Button>
        </section>
      )}
    </>
  )
}
