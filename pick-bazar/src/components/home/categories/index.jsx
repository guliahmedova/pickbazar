"use client"
import { getCategories } from "@/redux/features/categorySlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productcard";
import styles from "./categories.module.scss";
import { getProducts, getProductsByCategoryId } from "@/redux/features/productSlice";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (categories.length > 0) setCategoryId(categories[0].id);
  }, []);

  useEffect(() => {
    if (categoryId) dispatch(getProductsByCategoryId(categoryId));
  }, [categoryId, categories]);

  return (
    <section className={styles.categories_container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar_items}>
          {categories?.map((item) => (
            <div className={`${styles.sidebar_item} ${item.id === categoryId ? styles.sidebar_item_active : ""}`} key={item.id} onClick={() => {
              setCategoryId(item.id);
              setCategoryName(item.title)
            }}>

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
        {categoryName.length > 0 && (<span className={styles.selected_category}>{categoryName}</span>)}

        {products.length > 0 ? (
          <div className={styles.content_container}>
            {
              products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discount_price={product.discount_price}
                  unit={product.unit}
                  main_image={product.main_image}
                  amount_by_unit={product.amount_by_unit}
                  description={product.description}
                  category={product.category?.title}
                />
              ))
            }
          </div>
        ) : (
          <div>There are no related products</div>
        )}
      </div>
    </section>
  )
}

export default Categories