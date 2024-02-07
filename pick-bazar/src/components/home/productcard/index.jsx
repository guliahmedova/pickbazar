import styles from './productCard.module.scss';
import Image from 'next/image';

const ProductCard = () => {
    return (
        <div className={styles.product_card}>
            <div className={styles.card_header}>
                <span className={styles.card_img}>
                    <Image src='/img1.jpg' alt='img' fill sizes='100%' />
                </span>
                <span className={styles.discount}>10%</span>
            </div>
            <div className={styles.card_body}>
                <h6 className={styles.card_title}>lime</h6>
                <span className={styles.card_desc}>12 pc(s)</span>
            </div>
            <div className={styles.card_footer}>
                <div className={styles.left}>
                    <span className={styles.old_price}>$1.5</span>
                    <span className={styles.new_price}>$1.2</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.add_to_cart}>
                        <span className={styles.basket_icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.4px" height="12px" viewBox="0 0 14.4 12" className="basket"><g data-name="Group 120" transform="translate(-288 -413.89)"><path data-name="Path 154" d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path></g></svg>
                        </span>
                        <span className={styles.btn_text}>
                            Cart
                        </span>
                    </div>
                    <div className={styles.product_count}>
                        <button className={styles.count_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2"><rect data-name="Rectangle 522" width="12" height="2" rx="1"></rect></svg>
                        </button>
                        <span>1</span>
                        <button className={styles.count_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)"></rect></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard