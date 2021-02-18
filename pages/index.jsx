import style from '../styles/Home.module.css'

export default function Home () {
  return(
    <section className={style.container}>
      <img src="/fordevs-logo.png" alt="fordevs logo" class={style.img}/>
      <h1>ForDevs</h1>
      <h3>Talk about development with devlopers</h3>
    </section>
  )
}
