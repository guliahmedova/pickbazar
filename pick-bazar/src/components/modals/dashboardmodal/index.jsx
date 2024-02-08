import styles from "./dashboardmodal.module.scss";

const DashboardModal = () => {
    return (
        <div className={styles.modal_bg}>
            <div className={styles.modal_card}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h1>Add Product</h1>
                    </div>

                    <div className={styles.modal_body}>
                        <div className={styles.body_top}>
                            <p className={styles.left}>
                                Upload your Product image here
                            </p>
                            <div className={styles.right}>
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardModal