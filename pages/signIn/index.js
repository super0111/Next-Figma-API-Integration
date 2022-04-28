import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router";
import { BsFillChatSquareDotsFill, BsLockFill } from "react-icons/bs";
import classes from './index.module.css'
import { signIn, useSession } from 'next-auth/react';
import { getCsrfToken, getProviders,getSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const { locale } = useRouter();
    const {data: session, status} = useSession();

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
                console.log("results", result)
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
                <a 
                    onClick={() => {
                        router.push('/', '/', { locale: locale })
                    }}
                    locale={locale} 
                    className={classes.logo}
                >
                    <img className={classes.logo_img} src='/images/signIn/logo 1.png' />
                </a>
                <div className={classes.body}>
                    <div className={classes.title}>
                        { locale === "EN" ? "Sign In" : locale === "Es" ? "Señal En" : "" }
                    </div>
                    <div className={classes.input_field}>
                        <div className={classes.name_field}>
                            <BsFillChatSquareDotsFill color="#373F51" />
                            <div className={classes.name}>
                                { locale === "EN" ? "Email Address" : locale==="ES" ? "Dirección de correo electronico" : ""}
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
                                { locale === "EN" ? "Enter password" : locale === "ES" ? "Introducir la contraseña" : "" }
                            </div>
                        </div>
                        { locale === "EN" ? 
                            <input 
                                className={classes.input} 
                                type="password" 
                                placeholder='Enter password' 
                                onChange={handlePasswordChange}
                            /> :
                            locale === "ES" ? 
                            <input 
                                className={classes.input} 
                                type="password" 
                                placeholder='Introducir la contraseña' 
                                onChange={handlePasswordChange}
                            /> : ""
                        }
                    </div>
                    <div className={classes.forgotPassword_field}>
                        <div className={classes.remember_field}>
                            <input type="checkbox" className={classes.checkBox} />
                            <div className={classes.remember_name}>{ locale === "EN" ? "Remember Me" : locale ==="ES" ? "Requiredame" : "" }</div>
                        </div>
                        <a className={classes.forgot_name}>{ locale === "EN" ? "Forgot Password?" : locale === "ES" ? "Has olvidado tu contraseña?" : "" }</a>
                    </div>
                    <div className={classes.btn_field}>
                        <button onClick={handleSignIn} className={classes.signIn_btn}>{ locale === "EN" ? "Sign in" : locale === "ES" ? "Señal En" : "" }</button>
                    </div>
                    <div className={classes.comment}>
                        { locale === "EN" ? "By continuing past this page, you agree to the " : locale ==="ES" ? "" : "Al continuar más allá de esta pagina, usted acepta los" }
                        <span className={classes.font_red}>
                            { locale === "EN" ? "Terms of Use" : locale === "ES" ? "Terminos de Uso" : "" }
                        </span> 
                        { locale === "EN" ? "and understand that information will be used as described in our" : locale === "ES" ? "y entiendo que la información será utilizada como se describe en nuestro" : "" } 
                        <sapn className={classes.font_red}>{ locale === "EN" ? "Privacy Policty." : locale === "ES" ? "Politica de privacidad." : "" }</sapn>
                    </div>
                    <div className={classes.signUp_field}>
                        { locale === "EN" ? "Don't have a account?" : locale === "ES" ? "No tienes una cuenta?" : "" }
                        <a 
                            onClick={() => {
                                router.push('/signUp', '/signUp', { locale: locale })
                            }}
                            locale={locale}
                            className={classes.footer_signUp_btn}
                        >
                            { locale === "EN" ? "Sign up" : locale === "ES" ? "Senal Arriba" : "" }
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.right_bgField}>
                    <img className={classes.right_bg} src='/images/signIn/Group 89.png' />
                </div>
                <div className={classes.rigth_body}>
                    <div className={classes.rigth_title}>
                        { locale === "EN" ? "Welcome Back" : locale === "ES" ? "Bienvenido de nuevo" : "" } 
                    </div>
                    <div className={classes.right_text}>
                        { locale === "EN" ? "Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing." :
                            locale === "ES" ? "Descubra millones de eventos, reciba alertas sobre sus artistas favoritos, equipos, obras de teatro y más, además de la emisión de boletos siempre segura y sin esfuerzo." : ""
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default SignIn
