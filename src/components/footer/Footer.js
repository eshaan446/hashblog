import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.container}>
            <div>@2023 HashBlog,Inc. All rights reserved. Made with ❤️ by Eshaan</div>
            <div className={styles.social}>
                <Image src="/1.png" height={15} width={15} className={styles.icon} alt="Hashblog" />
                <Image src="/2.png" height={15} width={15} className={styles.icon} alt="Hashbloga" />
                <Image src="/3.png" height={15} width={15} className={styles.icon} alt="Hashblogb" />
                <Image src="/4.png" height={15} width={15} className={styles.icon} alt="Hashblogc" />
            </div>
        </div>
    )
}

export default Footer