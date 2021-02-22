import style from "styles/Button.module.css"

export default function Button({ children, disabled, onClick }) {
  return (
    <>
      <button className={style.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
