import style from "styles/Header.module.css"

export default function Header({ children, title }) {
  return (
    <header className={style.container}>
      {children}
      <h3 className={style.text}>{title}</h3>
    </header>
  )
}
