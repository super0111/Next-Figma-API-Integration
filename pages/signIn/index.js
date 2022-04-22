import React, { useState, useEffect } from "react"
import { BsFillChatSquareDotsFill, BsLockFill } from "react-icons/bs";
import classes from './index.module.css'
import { signIn, useSession } from 'next-auth/react';
import { getCsrfToken, getProviders,getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const {data: session, status} = useSession();
    console.log('session', session)
  console.log('status', status)


    const router = useRouter();

    const [ emailValue, setEmailValue ] = useState("")
    const [ passwordValue, setPasswordValue ] = useState("")

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
		if (!session) {
			try {
				const result = await signIn("credentials", {
					redirect: false,
					email: emailValue,
					password: passwordValue,
                });
                if (!result.error) {
                    router.push("/");
                } else{
                    console.log("result.error", result.error)
                    if(result.error === 'Password doesnt match'){
                        toast.error("Password doesnt match")
                    }else if(result.error === 'No user found with the email'){
                        toast.error('No user found with the email')
                    }
                }
			} catch (error) {
				console.log(error,'Login Error');
			}
		} else {
			router.push("/");
		}
    }

    return (
        <div className={classes.signIn}>
            <div className={classes.left}>
                <a href="/" className={classes.logo}>
                    <img className={classes.logo_img} src='/images/signIn/logo 1.png' />
                </a>
                <div className={classes.body}>
                    <div className={classes.title}>
                        Sign In
                    </div>
                    <div className={classes.input_field}>
                        <div className={classes.name_field}>
                            <BsFillChatSquareDotsFill color="#373F51" />
                            <div className={classes.name}>
                                Email Address
                            </div>
                        </div>
                        <input 
                            className={classes.input} 
                            type="text" 
                            placeholder='yourgmail123@gmail.comn' 
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className={classes.input_field}>
                        <div className={classes.name_field}>
                            <BsLockFill color="#373F51" />
                            <div className={classes.name}>
                                Enter password
                            </div>
                        </div>
                        <input 
                            className={classes.input} 
                            type="password" 
                            placeholder='Enter password' 
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={classes.forgotPassword_field}>
                        <div className={classes.remember_field}>
                            <input type="checkbox" className={classes.checkBox} />
                            <div className={classes.remember_name}>Remember Me</div>
                        </div>
                        <a className={classes.forgot_name}>Forgot Password?</a>
                    </div>
                    <div className={classes.btn_field}>
                        <button onClick={handleSignIn} className={classes.signIn_btn}>Sign in</button>
                    </div>
                    <div className={classes.comment}>
                        By continuing past this page, you agree to the <span className={classes.font_red}>Terms of Use</span> and understand that information will be used as described in our <sapn className={classes.font_red}>Privacy Policty.</sapn>
                    </div>
                    <div className={classes.signUp_field}>
                        don't have a account? <a href='/signUp' className={classes.footer_signUp_btn}>Sign up</a>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.right_bgField}>
                    <img className={classes.right_bg} src='/images/signIn/Group 89.png' />
                </div>                
                <div className={classes.rigth_body}>
                    <div className={classes.rigth_title}>
                        Welcome Back
                    </div>
                    <div className={classes.right_text}>
                        Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default SignIn

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req })

    console.log("signPage session", session)
    if (session) {
        // Signed in
        return {
            redirect: { destination: "/" }
        }
    }
    const csrfToken = await getCsrfToken(context)
    const providers = await getProviders()
  console.log("providers", providers)
    return {
        props: { csrfToken, providers },
    }
  }