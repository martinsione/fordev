import style from '../styles/Button.module.css'

export default function Button ({ children, onClick }) {
  return (
    <>
      <button className={style.button} onClick={onClick}>
        { children }
      </button>
    </>
  )
}
