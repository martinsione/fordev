import style from '../styles/Layout.module.css'

export default function Layout ({ children }) {
  return (
    <div className={style.container}>
      <main className={style.main}>
        { children }
      </main>
    </div>
  )
}
