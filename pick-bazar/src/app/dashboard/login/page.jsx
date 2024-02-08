import style from './login.module.scss';
import Image from 'next/image';

const Login = () => {
  return (
    <div className={style.login_layout}>
      <form className={style.login_form}>
        
        <div className={style.header}>
          <span className={style.logo_box}>
            <Image src='/logo.svg' fill alt='logo' />
          </span>
          <p className={style.info}>Log in to admin</p>
        </div>


        <div className={style.form_item}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Ex: demo@demo.com' />
        </div>

        <div className={style.form_item}>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' />
        </div>


        <button className={style.login_btn}>Submit</button>

      </form>
    </div>
  )
}

export default Login