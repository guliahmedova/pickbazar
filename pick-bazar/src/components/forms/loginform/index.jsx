"use client";
import utils from "@/styles/utils.module.scss";
import styles from "./loginform.module.scss";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { userLogin } from "@/redux/features/loginSlice";

const LoginForm = ({setOpenModal}) => {
    const [formKey, setFormKey] = useState("login");
   
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formKey === 'login' && formData.password.length > 0 && formData.username.length > 0) {
            dispatch(userLogin({
                username: formData.username,
                password: formData.password
            })).then((confirm) => {
                if (confirm.meta.requestStatus === "fulfilled") {
                    setOpenModal(false);
                };
            });
        }
    };

    return (
        <div className={utils.form_layout_register}>

            <div className={utils.register_form_header}>
                <h1 className={utils.regis_title}>
                    {formKey === "signup" ? "Sign Up" : "Welcome Back"}
                </h1>
                <p className={utils.regis_desc}>
                    {formKey === "signup" ? "By signing up, you agree to Pickbazar's" : "Login with your email & password"}
                </p>
            </div>


            <form className={utils.register_form_body}>
                <div className={utils.register_form_input}>
                    <input type="username" name="username" value={formData.username} onChange={(e) => handleChange(e)} placeholder="joe123" />
                </div>
                <div className={utils.register_form_input}>
                    <input type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} />
                </div>
                <button className={`${utils.btn_default} ${styles.register_btn}`} onClick={(e) => handleSubmit(e)}>Continue</button>
            </form>


            <div className={styles.or_line}>
                <span>or</span>
            </div>

            <div className={utils.btns}>
                <button className={utils.fc_btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 17 17"><path data-name="_ionicons_svg_logo-facebook (1)" d="M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z" transform="translate(-64 -64)"></path></svg>
                    Continue with Facebook
                </button>
                <button className={utils.ggle_btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 16.677 17"><path d="M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z" transform="translate(-52 -48.1)"></path></svg>
                    Continue with Google
                </button>
            </div>

            {
                formKey === "login" ? (

                    <div className={utils.form_info}>
                        Don't have any account? <button className={utils.link_btn} onClick={() => setFormKey("signup")}>Sign Up</button>
                    </div>
                ) : (

                    <div className={utils.form_info}>
                        Already have an account? <button className={utils.link_btn} onClick={() => setFormKey("login")}>Login</button>
                    </div>
                )
            }

        </div>
    )
}

export default LoginForm