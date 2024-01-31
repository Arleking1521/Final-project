import React from 'react';
import logo2 from "../assets/logo2.png"
import fb from "../assets/icons8-facebook-30.png"
import yt from "../assets/icons8-youtube-play-30.png"
import inst from "../assets/icons8-instagram-30.png"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img src={logo2}/>
            </div>
            <div className="contacts">
                <p><b>Школа программирования KnewIT © 2023</b></p>
                <p><b>Адрес в г. Алматы:</b> ул. Макатаева 117 лит А Бизнес центр «LOTOS», офис 423a </p>
                <p><b>Адрес в г. Астана:</b> Улы Дала 27/1, офис 3, ЖК Камал-2</p>
            </div>
            <div className="contacts">
                <p><b>Телефон:</b> +7 (701) 938-04-63</p>
                <p><b>Email:</b> info@knewit.kz</p>
                <p><b>ИИН/БИН:</b> 920214302278</p>
            </div>
            <div className="socials">
                <a href="" className="social"><img src={fb}/></a>
                <a href="" className="social"><img src={inst}/></a>
                <a href="" className="social"><img src={yt}/></a>
            </div>
        </div>
    );
};

export default Footer;