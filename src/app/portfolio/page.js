import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "HashBlog Services Page",
  description: "This is Services Page",
};
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose your domain</h1>
      <div className={styles.items}>
        <Link href="/portfolio/interview" className={styles.item}>
          <span className={styles.title}>Interview</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;