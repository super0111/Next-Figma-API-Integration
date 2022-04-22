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
            toast.info('Thanks For Signing Up! Please Login')
            router.push('/signIn')
        }
    }, [isRegistered])

    const handleSignUp = async (e) => {  
        e.preventDefault()
        if(!emailValue || !emailValue.includes('@') || !passwordValue){
            toast.info('Invalid details');
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
            console.log('data', data)
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
                <a href="/" className={classes.logo}>
                    <img className={classes.logo_img} src='/images/signIn/logo 1.png' />
                </a>
                <div className={classes.body}>
                    <div className={classes.title}>
                        Sign Up
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
                            type="text" 
                            placeholder='Enter password' 
                            onChange={handlePasswordChange}    
                        />
                    </div>
                    <div className={classes.full_name}>
                        <div className={classes.first_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.first_name}>
                                    First Name
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
                                    Last Name
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
                                    Country of Residence
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
                                    Zip/Postal Code
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
                            Sign Up
                        </button>
                    </div>
                    <div className={classes.comment}>
                        By continuing past this page, you agree to the <span className={classes.font_red}>Terms of Use</span> and understand that information will be used as described in our <sapn className={classes.font_red}>Privacy Policty.</sapn>
                    </div>
                    <div className={classes.signUp_field}>
                        have a account? <a href='/signIn' className={classes.footer_signUp_btn}>Sign In</a>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.right_bgField}>
                    <img className={classes.right_bg} src='/images/signIn/Group 89.png' />
                </div>                
                <div className={classes.rigth_body}>
                    <div className={classes.rigth_title}>
                        Your All-Access Pass
                    </div>
                    <div className={classes.right_text}>
                        This is it - millions of live events. Up to the minute alerts for your favorite artists and teams and, of course, always safe, secure ticketing.
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default SignUp