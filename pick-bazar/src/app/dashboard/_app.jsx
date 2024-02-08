"use client"
import styles from "./dashboard.module.scss";
import Image from "next/image";
import utils from "@/styles/utils.module.scss";
import Link from "next/link";
import { useState } from "react";
import DashboardModal from "@/components/modals/dashboardmodal";

const Dashboard = ({ children }) => {
    const [showdropdown, setshowdropdown] = useState(false);

    return (
        <>
            <div className={styles.layout}>
                <header className={styles.darshboard_header}>
                    <div className={styles.darshboard_logo}>
                        <Image src="/logo.svg" fill alt="logo" />
                    </div>
                    <div className={styles.right}>
                        <button className={utils.dashboard_btn}>Add Products</button>
                        <div className={styles.profil_dropdown} onClick={() => setshowdropdown(!showdropdown)}>
                            <span className={styles.avatar}>
                                <img src="/avatar.png" alt="" />
                            </span>
                            {showdropdown && (
                                <div className={styles.dropdown_list}>
                                    <Link className={styles.link} href="/">Staff</Link>
                                    <Link className={styles.link} href="/">Settings</Link>
                                    <button className={styles.logout_btn}>Logout</button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <div className={styles.content_container}>
                    <aside className={styles.darshboard_sidebar}>
                        <div className={styles.items}>
                            <Link href="/dashboard" className={styles.darshboard_sidebar_item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g data-name="Group 2583" transform="translate(0 0)"><path data-name="Path 2129" d="M1667.731,877.683a3.066,3.066,0,1,1-3.067-3.068A3.061,3.061,0,0,1,1667.731,877.683Z" transform="translate(-1652.731 -865.747)"></path><path data-name="Path 2130" d="M1471.213,874.615a3.066,3.066,0,1,1-3.072,3.064A3.06,3.06,0,0,1,1471.213,874.615Z" transform="translate(-1468.141 -865.747)"></path><path data-name="Path 2131" d="M1474.272,684.227a3.066,3.066,0,1,1-3.044-3.075A3.063,3.063,0,0,1,1474.272,684.227Z" transform="translate(-1468.14 -681.152)"></path><path data-name="Path 2132" d="M1674.436,691.284q0,1.143,0,2.286c0,.335-.107.441-.443.441h-4.572c-.326,0-.438-.108-.438-.43q0-2.295,0-4.589c0-.323.111-.433.435-.433h4.572c.344,0,.445.105.446.455Q1674.436,690.149,1674.436,691.284Z" transform="translate(-1659.775 -688.219)"></path></g></svg>
                                Dashboard
                            </Link>

                            <Link href="/dashboard/products" className={`${styles.darshboard_sidebar_item} ${styles.sidebar_item_active}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.6" height="13" viewBox="0 0 15.6 13"><path data-name="Path 154" d="M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0" transform="translate(-288 -413.89)" ></path></svg>
                                Products
                            </Link>
                        </div>
                    </aside>
                    <div className={styles.dashboard_content}>
                        {children}
                    </div>
                </div>
            </div>

            <DashboardModal />
        </>
    )
}

export default Dashboard;