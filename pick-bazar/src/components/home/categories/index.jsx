import ProductCard from "../productcard";
import styles from "./categories.module.scss";
import Image from "next/image";

const Categories = () => {
  return (
    <section className={styles.categories_container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_items}>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Fruits & Vegetables</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Fruits & Vegetables</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Snacks</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Fruits & Vegetables</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Fruits & Vegetables</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Fruits & Vegetables</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Snacks</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
          <div className={styles.sidebar_item}>
            <span className={styles.sidebar_item_icon}>
              <Image src='/apple.svg' fill alt="icon" />
            </span>
            <span className={styles.item_text}>Fruits & Vegetables</span>
            <span className={styles.sidebar_item_icon}>
              <Image src='/right.svg' fill alt="icon" />
            </span>
          </div>
        </div>
      </aside>

      <div className={styles.content}>
        <span className={styles.selected_category}>Fruits And Vegetables</span>
        <div className={styles.content_container}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  )
}

export default Categories