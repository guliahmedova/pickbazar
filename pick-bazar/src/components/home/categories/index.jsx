import { useEffect } from "react";
import ProductCard from "../productcard";
import styles from "./categories.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "@/redux/features/categorySlice";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  return (
    <section className={styles.categories_container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_items}>
          {categories?.map((item) => (
            <div className={styles.sidebar_item} key={item.id}>
              <span className={styles.sidebar_item_icon}>
                <span dangerouslySetInnerHTML={{ __html: item.icon_svg }} />
              </span>
              <span className={styles.item_text}>{item.title}</span>
              <span className={styles.sidebar_item_icon}>
                <Image src='/right.svg' fill alt="icon" />
              </span>
            </div>
          ))}
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