import { useState, useEffect } from "react"
import style from "styles/Home.module.css"
import Button from "components/Button"
import Github from "components/Icons/Github"
import Avatar from "components/Avatar"

import { loginWithGithub, onAuthStateChanged } from "firebase/client"

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGithub()
      .then(setUser)
      .catch((err) => console.log(err))
  }
  return (
    <section className={style.container}>
      <img src="/fordevs-logo.png" alt="fordevs logo" className={style.img} />
      <h1>ForDevs</h1>
      <h3>Talk about development with devlopers</h3>
      {user === null && (
        <Button onClick={handleClick}>
          <Github fill={"#fff"} width={24} height={24} />
          Login with Github
        </Button>
      )}
      {user && (
        <div>
          <Avatar src={user.avatar} text={user.username} />
        </div>
      )}
    </section>
  )
}
