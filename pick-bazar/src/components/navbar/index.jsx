import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import utils from "@/styles/utils.module.scss";

const Navbar = ({ setOpenModal }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_top}>
                    <div className={styles.header_left}>
                        <div className={styles.hamburger_menu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.header_logo}>
                            <Image src="/logo.svg" alt='logo' fill />
                        </div>
                        <div className={styles.header_dropdown}>
                            <div className={styles.dropdwon_header}>
                                <div className={styles.dropdwon_icon}>
                                    <Image src="/apple.svg" alt='apple' fill />
                                </div>
                                <span className={styles.dropdwon_text}>Grocery</span>
                                <div className={styles.dropdwon_down_icon}>
                                    <Image src="/down.svg" alt='apple' fill />
                                </div>
                            </div>
                            <div className={styles.dropdwon_links}>
                                <Link href="/">
                                    <div className={styles.dropdwon_links_icon}>
                                        <Image src="/apple.svg" alt='apple' fill />
                                    </div>
                                    <span>Grocery</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header_right}>
                        <Link href="#" className={styles.right_link}>Offer</Link>
                        <div className={styles.right_link}>
                            <span className={styles.right_link_icon}><Image src="/questionmark.svg" alt="question_mark" fill /></span>
                            <span>Need Help</span>
                        </div>
                        <div className={styles.langs}>
                            <div className={styles.langs_title}>
                                <span className={styles.langs_icon}><Image src="/us.svg" alt="us" fill /></span>
                                <span>English</span>
                            </div>
                        </div>
                        <button className={`${utils.btn_default} ${styles.show_btn}`} onClick={() => {
                            if (setOpenModal) setOpenModal(true)
                        }}>Join</button>
                        <span className={styles.search_btn}><Image src="/search.svg" alt="search_icon" fill /></span>
                    </div>
                </div>
                <div className={styles.header_bottom}>
                    <div className={styles.top}>
                        <span className={styles.top_desc}>Groceries Delivered in 90 Minute</span>
                        <button className={styles.tag_name}>
                            Grocery
                        </button>
                    </div>
                    <div className={styles.bottom}>
                        <form className={styles.header_form}>
                            <span className={styles.img_box}><Image src="/search.svg" alt='search_icon' fill />
                            </span>
                            <input type="text" placeholder='Search your products from here' className={styles.form_input} />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;