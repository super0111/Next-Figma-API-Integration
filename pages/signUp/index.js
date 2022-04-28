import Reeact, { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import { BsFillChatSquareDotsFill, BsLockFill } from "react-icons/bs";
import {BiWorld} from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import classes from './index.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const router = useRouter();
    const { locale } = useRouter();
    const [ emailValue, setEmailValue ] = useState("")
    const [ passwordValue, setPasswordValue ] = useState("")
    const [ fNameValue, setfNameValue ] = useState("")
    const [ lNameValue, setlNameValue ] = useState("")
    const [ countryValue, setCountryValue ] = useState("")
    const [ zipCodeValue, setZipCodeValue ] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }
    const handlefNameChange = (e) => {
        setfNameValue(e.target.value)
    }
    const handlelNameChange = (e) => {
        setlNameValue(e.target.value)
    }
    const handleCountryValueChange = (e) => {
        setCountryValue(e.target.value)
    }
    const handleZipCodeChange = (e) => {
        setZipCodeValue(e.target.value)
    }

    useEffect(() => {
        if(isRegistered){
            toast.info( locale === "EN" ? 'Thanks For Signing Up! Please Login' : locale === "ES" ? "Gracias por registrarte!  Por favor Iniciar session" : "" )
            router.push('/signIn', '/signIn', { locale: locale })
        }
    }, [isRegistered])

    const handleSignUp = async (e) => {  
        e.preventDefault()
        if(!emailValue || !emailValue.includes('@') || !passwordValue){
            toast.info( locale === "EN" ? 'Invalid details' : locale === "ES" ? "Details invalidos" : "" );
            return;
        }
		const url = '/api/auth/signUp';
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
                fName: fNameValue,
                lName: lNameValue,
                countryValue: countryValue,
                zipCode: zipCodeValue,
            })
        })
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res); 
        })
        .then(function (data) {
            setIsRegistered(true)
        })
        .catch((res) => {
            res.json().then((json) => {
                toast.error(json.message)
                console.log('Error:', json.message)
            })
        });
    }

    return (
        <div className={classes.signUp}>
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
                        { locale === "EN" ? "Sign Up" : locale === "ES" ? "Senal Arriba" : "" }
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
                    <div className={classes.full_name}>
                        <div className={classes.first_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.first_name}>
                                    { locale === "EN" ? "First Name" : locale=== "ES" ? "Primer Nombre" : "" }
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input 
                                    className={classes.first_input} 
                                    type="text" 
                                    placeholder="Jon" 
                                    onChange={handlefNameChange}
                                />
                            </div>
                        </div>
                        <div className={classes.first_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.first_name}>
                                    { locale === "EN" ? "Last Name" : locale === "ES" ? "Apellido" : "" }
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input 
                                    className={classes.first_input} 
                                    type="text" 
                                    placeholder="Doe" 
                                    onChange={handlelNameChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.country}>
                        <div className={classes.country_field}>
                            <div className={classes.first_name_field}>
                                <BiWorld />
                                <div className={classes.country_name}>
                                    { locale === "EN" ? "Country of Residence" : locale === "ES" ? "Pais de residencia" : "" }
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input 
                                    className={classes.first_input} 
                                    type="text" 
                                    placeholder="Doe" 
                                    onChange={handleCountryValueChange}
                                />
                            </div>
                        </div>
                        <div className={classes.country_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.country_name}>
                                    { locale === "EN" ? "Zip/Postal Code" : locale === "ES" ? "Codigo postal" : "" }
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input 
                                    className={classes.first_input} 
                                    type="text" 
                                    placeholder="Doe" 
                                    onChange={handleZipCodeChange}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.btn_field}>
                        <button 
                            className={classes.signUp_btn}
                            onClick={handleSignUp}
                        >
                            { locale === "EN" ? "Sign up" : locale === "ES" ? "Senal Arriba" : "" }
                        </button>
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
                        { locale === "EN" ? "Have a account?" : locale === "ES" ? "Tienes una cuenta?" : "" } 
                        <a 
                            onClick={() => {
                                router.push('/signIn', '/signIn', { locale: locale })
                            }}
                            locale={locale}
                            className={classes.footer_signUp_btn}
                        >
                            { locale === "EN" ? "Sign In" : locale === "Es" ? "Señal En" : "" }
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
                        { locale === "EN" ? "Your All-Access Pass" : locale === "ES" ? "Su pase de acceso completo" : "" }
                    </div>
                    <div className={classes.right_text}>
                        { locale === "EN" ? "This is it - millions of live events. Up to the minute alerts for your favorite artists and teams and, of course, always safe, secure ticketing." :
                            locale === "ES" ? "Esto es todo: millones de eventos en vivo.  Alertas actualizadas de tus artistas y equipos favoritos y, por supuesto, emisión de entradas siempre segura." : ""
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default SignUp