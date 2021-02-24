import { useState } from "react"
import { useRouter } from "next/router"

import Button from "components/Button"
import Avatar from "components/Avatar"
import useUser from "hooks/useUser"
import { addPost } from "firebase/client"

import style from "styles/ComposePost.module.css"

const COMPOSE_STATES = {
  ERROR: -1,
  UNKNOWN_USER: 0,
  LOADING: 1,
  SUCCESS: 2,
}

export default function ComposePost() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.UNKNOWN_USER)

  const user = useUser()
  const router = useRouter()

  const handleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addPost({
      avatar: user.avatar,
      content: message,
      uid: user.uid,
      username: user.username,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      {user && (
        <section className={style.container}>
          <Avatar />
          <form onSubmit={handleSubmit}>
            <textarea
              className={style.textarea}
              onChange={handleChange}
              placeholder="What's happening?"
            ></textarea>
            <Button disabled={isButtonDisabled}>Post</Button>
          </form>
        </section>
      )}
    </>
  )
}
