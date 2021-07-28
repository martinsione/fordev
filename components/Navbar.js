import style from "styles/Navbar.module.css"
import Link from "next/link"
import Create from "components/Icons/Create"
import Home from "components/Icons/Home"

export default function Navbar() {
  return (
    <nav className={style.container}>
      <Link href="/compose/post">
        <a>
          <Create width={32} height={32} stroke="#09f" />
        </a>
      </Link>
      <Link href="/home">
        <a>
          <Home width={32} height={32} stroke="#09f" />
        </a>
      </Link>
    </nav>
  )
}
