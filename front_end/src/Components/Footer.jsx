import React, { useContext } from 'react';
import { CombinedContext } from '../Context/context';
import fb from "../assets/icons8-facebook-30.png"
import yt from "../assets/icons8-youtube-play-30.png"
import inst from "../assets/icons8-instagram-30.png"

const Footer = () => {
    const combinedContext = useContext(CombinedContext);
    const companies = combinedContext.allDatas.Companies || [];
    const company = companies.find(c => c.name.toLowerCase() == combinedContext.companyURL.toLowerCase())
    const mainColor = company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"
    const secColor = company && company.secondary_color_hex ? company.secondary_color_hex : "#FFFFFF"
    return (
        <div className="footer">
            <div>
                <img src={company && company.logo_dark ? company.logo_dark : null} width={"100px"} />
            </div>
            <div className="contacts">
                <p><b>{company && company.full_name ? company.full_name : null} © 2024</b></p>
                <p><b>Адрес: </b>{company && company.place ? company.place : null}</p>
                <p><b>Вебсайт: </b><a style={{ color: `${company && company.main_color_hex ? company.main_color_hex : "#FFFFFF"}` }} href={company && company.website ? company.website : null}>{company && company.name ? company.name : null}</a></p>
            </div>
            <div className="contacts">
                <p><b>Телефон: </b>{company && company.phone ? company.phone : null}</p>
                <p><b>Email: </b> {company && company.email ? company.email : null}</p>
                <p><b>ИИН/БИН: </b> {company && company.iin ? company.iin : null}</p>
            </div>
            <div className="socials">
                {company && company.facebook && (
                    <a style={{ background: `linear-gradient(${secColor}, ${mainColor})` }} href={company.facebook} className="social"><img src={fb} /></a>
                )}
                {company && company.instagram && (
                    <a style={{ background: `linear-gradient(${secColor}, ${mainColor})` }} href={company.instagram} className="social"><img src={inst} /></a>
                )}
                {company && company.youtube && (
                    <a style={{ background: `linear-gradient(${secColor}, ${mainColor})` }} href={company.youtube} className="social"><img src={yt} /></a>
                )}
            </div>
        </div>
    );
};

export default Footer;