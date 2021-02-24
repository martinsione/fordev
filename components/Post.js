import Avatar from "components/Avatar"
import style from "styles/Post.module.css"
import useTimeAgo from "hooks/useTimeAgo"
import Link from "next/link"

export default function Post({
  avatar,
  createdAt,
  id,
  content,
  uid,
  username,
}) {
  const timeago = useTimeAgo(createdAt)
  return (
    <article className={style.container} key={id}>
      <div className={style.avatar}>
        <Avatar alt={username} src={avatar} title={username} />
      </div>
      <div className={style.text}>
        <span>
          <h4 className={style.username}>{username}</h4>
          <p className={style.createdAt}>{timeago}</p>
        </span>
        <p className={style.content}>{content}</p>
      </div>
    </article>
  )
}
