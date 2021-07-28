import { useEffect, useState } from "react"
import Head from "next/head"

import Post from "components/Post"
import useUser from "hooks/useUser"
import { fetchLatestPosts } from "firebase/client"

export default function HomePage({ children }) {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestPosts().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Home - Fordev</title>
      </Head>
      {timeline.map(({ avatar, createdAt, id, name, content, username }) => {
        return (
          <Post
            avatar={avatar}
            createdAt={createdAt}
            content={content}
            key={id}
            id={id}
            name={name}
            username={username}
          />
        )
      })}
    </>
  )
}
