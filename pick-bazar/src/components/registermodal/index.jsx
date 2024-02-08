"use client"
import LoginForm from "@/components/forms/loginform";
import styles from "./registermodal.module.scss";
import { useState } from "react";

const RegisterModal = ({ openModal, setOpenModal }) => {

    return (
        <>
            {openModal && (
                <div className={styles.register_modal}>
                    <div className={styles.modal_container}>
                        <button className={styles.modal_close_btn} onClick={() => setOpenModal(!openModal)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path id="_ionicons_svg_ios-close_5_" data-name="_ionicons_svg_ios-close (5)" d="M179.418,175.84l10.925-10.925a2.56,2.56,0,0,0-3.62-3.62L175.8,172.22l-10.925-10.925a2.56,2.56,0,1,0-3.62,3.62l10.925,10.925-10.925,10.925a2.56,2.56,0,0,0,3.62,3.62L175.8,179.46l10.925,10.925a2.56,2.56,0,0,0,3.62-3.62Z" transform="translate(-160.5 -160.55)"></path></svg>
                        </button>
                        <div className={styles.modal_card}>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RegisterModal