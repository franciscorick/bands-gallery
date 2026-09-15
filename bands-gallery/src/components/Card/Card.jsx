import styles from './Card.module.css'

function Card({ nome, foto }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={foto} alt={nome} />
      <h3 className={styles.name}>{nome}</h3>
    </div>
  )
}

export default Card
