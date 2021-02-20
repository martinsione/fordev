import style from "styles/Avatar.module.css"

export default function Avatar({ alt, src, title }) {
  return (
    <>
      <img className={style.avatar} alt={alt} src={src} title={title} />
    </>
  )
}
