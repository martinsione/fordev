import Avatar from "components/Avatar"
import style from "styles/Post.module.css"
import useTimeAgo from "hooks/useTimeAgo"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Post({
  avatar,
  createdAt,
  id,
  content,
  uid,
  username,
}) {
  const timeago = useTimeAgo(createdAt)

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  return (
    <article className={style.container} onClick={handleClick}>
      <div className={style.avatar}>
        <Avatar alt={username} src={avatar} title={username} />
      </div>
      <div className={style.text}>
        <span>
          <h4 className={style.username}>{username}</h4>
          <Link href={`/status/${id}`}>
            <a className={style.createdAt}>
              <time>{timeago}</time>
            </a>
          </Link>
        </span>
        <p className={style.content}>{content}</p>
      </div>
    </article>
  )
}
