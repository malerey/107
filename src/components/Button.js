// css modules
// "css in css"

import styles from './Button.module.scss'

const Button = () => {

  const handleClick = () => {
    console.log("me hicieron click")
  }

  return (
    <div className={styles.contenedor}>
    <button className={styles.boton} onClick={handleClick}>Hola</button>
    <button className={styles.boton} onClick={handleClick}>Chau</button>
    </div>
  )
}

export default Button
