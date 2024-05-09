import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod facilis
          earum, nam recusandae repudiandae praesentium officia labore sed
          officiis vel!
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={'/brands.png'}
            alt="hero"
            className={styles.brandImg}
            fill
          />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src={'/hero.gif'} alt="hero" className={styles.heroImg} fill />
      </div>
    </div>
  )
}

export default Home
