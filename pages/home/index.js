import { useEffect, useState } from "react"

import Post from "components/Post"
import style from "styles/Home.module.css"
import useUser from "hooks/useUser"
import { fetchLatestPosts } from "firebase/client"

export default function HomePage({ children }) {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestPosts().then(setTimeline)
  }, [user])

  const POST_STATES = {
    ERROR: -1,
    UNDEFINED: 0,
    LOADING: 1,
    SUCCESS: 2,
  }

  return (
    <>
      <section className={style.section}>
        {timeline.map(({ avatar, createdAt, id, name, content, username }) => {
          return (
            <Post
              avatar={avatar}
              createdAt={createdAt}
              content={content}
              id={id}
              name={name}
              username={username}
            />
          )
        })}
      </section>
    </>
  )
}
