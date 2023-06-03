import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
   <>
    <div className={styles.container} >
    <div className={styles.item}>
      <h1 className={styles.title}>Your Words. Our Platform. Share the Story.</h1>
      <p className={styles.desc}>Where Ideas Flourish: Join Our Vibrant Blogging Community Today!</p>
      <Button url="/dashboard" text="Start Blogging"/>
    </div>
    <div className={styles.item}>
    <Image height={500} width={500} src="/hero.png" className={styles.img} alt="Hero"/>
    </div>
    </div>
   </>
  )
}
