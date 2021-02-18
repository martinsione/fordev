import style from "styles/Avatar.module.css"

export default function Avatar({src, text}) {
  return (
    <div className={style.container}>
      <img className={style.avatar} src={src} alt={text} title={text} />
      <h4 className={style.text}>{text}</h4>
    </div>
  )
}
