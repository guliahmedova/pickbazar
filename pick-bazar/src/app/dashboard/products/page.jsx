import styles from "./products.module.scss";
import Image from 'next/image';

const Products = () => {
    return (
        <div className={styles.products}>
            <div className={styles.product_card}>
                <div className={styles.card_header}>
                    <span className={styles.card_img}>
                        <Image src='/img1.jpg' alt='img' fill sizes='100%' />
                    </span>
                </div>
                <div className={styles.card_body}>
                    <h6 className={styles.card_title}>lime</h6>
                    <span className={styles.card_desc}>12 pc(s)</span>
                </div>
                <div className={styles.card_footer}>
                    <div className={styles.left}>
                        <span className={styles.new_price}>$1.2</span>
                        <span className={styles.old_price}>$1.5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products