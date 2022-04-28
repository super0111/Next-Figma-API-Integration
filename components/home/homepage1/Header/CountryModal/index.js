import { useState, useContext } from "react";
import { useRouter } from "next/router"
import classes from "./CountryModal.module.css"
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import { Context } from "../../../../AppContext";
import ReactFlagsSelect from "react-flags-select";

const countryModal = (props) => {
    const { locale, locales, asPath } = useRouter()
    const { setModalIsShow } = props;
    const [ langValue, setLangValue ] = useState("EN")
    const { countryValue, setCountryValue } = useContext(Context);

    const handleLangValue = (e) => {
        setLangValue(e.target.value)
    }
    const handleClick = () => {
        setModalIsShow(false)
    }
    const handleClose = () => {
        setModalIsShow(false)
    }

    return (
        <div className={classes.modal}>
        <div className={classes.countryModal}>
            <div className={classes.close} onClick={handleClose}>
                <VscChromeClose className={classes.close_icon}/>
            </div>
            <div className={classes.body}>
                <div className={classes.title}>
                    { locale === "EN" ? "Select your coutry and languase" : locale === "ES" ? "Seleccione su pais e idioma" : "" }
                </div>
                <div className={classes.country_field}>
                    <div className={classes.name}>
                        { locale === "EN" ? "YOUR COUNTRY" : locale === "ES" ? "TU PANS" : "" }
                    </div>
                    {/* <select className={classes.select} onChange={handleCountryChange}>
                        <option value="EN" data-countries='{"US": "United States","CA": "Canada"}' data-icon="/images/flags/USA_Flag.png">
                            US
                        </option>
                        <option value="Mexico ">Mexico </option>
                    </select> */}
                    <ReactFlagsSelect
                        selected={countryValue}
                        onSelect={(code) => setCountryValue(code)}
                        countries={["US", "MX"]}
                        placeholder="Select Country"
                        showSelectedLabel={true}
                    />
                </div>
                <div className={classes.lang_field}>
                    <div className={classes.name}>
                        { locale === "EN" ? "YOUR LANGUAGE" : locale === "ES" ? "TU LENGUAJE" : "" }
                    </div>
                    <div className={classes.lang_select} onChange={handleLangValue}>
                        {locales.map((l, i) => (
                            <Link
                                key={i}
                                href={asPath}
                                locale={l}
                            >
                                <a className={classes.lang_item}>
                                    { l }
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <button className={classes.btn} onClick={handleClick}>
                    { locale === "EN" ? "OK" : locale === "ES" ? "DE ACUERDO" : "" }
                </button>
            </div>
        </div>
        </div>
    )
}
export default countryModal