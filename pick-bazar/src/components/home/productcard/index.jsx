"use client";
import ProductCardModal from '@/components/modals/productModal';
import { getProductById } from '@/redux/features/productSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './productCard.module.scss';

const ProductCard = ({ id, title, price, discount_price, amount_by_unit, unit, main_image, description, category }) => {
    const [openProductModal, setOpenProductModal] = useState(false);
    const [productId, setProductId] = useState(0);
    const dispatch = useDispatch();

    const [currentImgIndex, setCurrentImgIndex] = useState(1);

    const { product } = useSelector((state) => state.product);

    useEffect(() => {
        if (productId !== 0) dispatch(getProductById(productId));
    }, [productId]);

    return (
        <>
            <div className={styles.product_card} onClick={() => {
                setOpenProductModal(true);
                setProductId(id);
            }}>
                <div className={styles.card_header}>
                    <span className={styles.card_img}>
                        <img src={main_image} alt='img' />
                    </span>
                    {discount_price && <span className={styles.discount}>{discount_price.replace(/\.00$/, '')}%</span>}
                </div>
                <div className={styles.card_body}>
                    <h6 className={styles.card_title}>{title}</h6>
                    <span className={styles.card_desc}>{amount_by_unit} {unit}</span>
                </div>
                <div className={styles.card_footer}>
                    <div className={styles.left}>
                        {
                            discount_price !== null ? (
                                <>
                                    <span className={styles.old_price}>$ {price}</span>
                                    <span className={styles.new_price}>$ {discount_price}</span>
                                </>
                            ) : (
                                <>
                                    <span className={styles.new_price}>${price}</span>
                                </>
                            )
                        }

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


            <ProductCardModal openProductModal={openProductModal}
            setOpenProductModal = {setOpenProductModal}
                key={product?.id}
                choldren={
                    <div className={styles.ProductCard_content}>
                        <div className={styles.right}>
                            <div className={styles.main_img}>
                                <img src={product?.main_image} alt="" />
                            </div>
                            <div className={styles.imgs}>
                                <img className={currentImgIndex === 1 ? styles.active_omg : ""} src={product?.main_image} alt="" onClick={() => setCurrentImgIndex(1)} />
                                <img className={currentImgIndex === 2 ? styles.active_omg : ""} src={product?.main_image} alt="" onClick={() => setCurrentImgIndex(2)} />
                                <img className={currentImgIndex === 3 ? styles.active_omg : ""} src={product?.main_image} alt="" onClick={() => setCurrentImgIndex(3)} />
                                <img className={currentImgIndex === 4 ? styles.active_omg : ""} src={product?.main_image} alt="" onClick={() => setCurrentImgIndex(4)} />
                            </div>
                        </div>
                        <div className={styles.left}>
                            <h1 className={styles.title}>{product?.title}</h1>
                            <span className={styles.unit}>{product?.amount_by_unit} {product?.unit}</span>
                            <p className={styles.desc}>{product?.description}</p>
                            <span className={styles.category_name}>{product?.category?.title}</span>
                            <div className={styles.footer}>
                                <span className={styles.price}>${product?.price}</span>
                                <div className={styles.add_to_cart}>
                                    <span className={styles.basket_icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.4px" height="12px" viewBox="0 0 14.4 12" className="basket"><g data-name="Group 120" transform="translate(-288 -413.89)"><path data-name="Path 154" d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path></g></svg>
                                    </span>
                                    <span className={styles.btn_text}>
                                        Cart
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

        </>
    )
}

export default ProductCard