import style from '../styles/Home.module.css'
import Button from '../components/Button'
import Github from '../components/Icons/Github'

export default function Home () {
  return(
    <section className={style.container}>
      <img src="/fordevs-logo.png" alt="fordevs logo" class={style.img}/>
      <h1>ForDevs</h1>
      <h3>Talk about development with devlopers</h3>
      <Button>
        <Github fill={`#fff`}width={24} height={24}/>
        Login with Github
      </Button>
    </section>
  )
}
