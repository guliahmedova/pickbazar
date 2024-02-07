import styles from "./hero.module.scss";
import Image from 'next/image';
import utils from "@/app/utils.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero_container}>
                <h1 className={styles.hero_title}>Groceries Delivered in 90 Minute</h1>
                <span className={styles.hero_desc}>Get your healthy foods & snacks delivered at your doorsteps all day everyday</span>
                <form className={styles.hero_form}>
                    <span className={styles.form_tag}>Grocery</span>
                    <input type="search" placeholder="Search your products from here" className={styles.form_input} />
                    <button className={`${utils.btn_default} ${styles.search_btn}`}>
                        <span className={styles.search_icon}>
                            <Image src="/search.svg" fill alt="search_icon" />
                        </span>
                        Search
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Hero