import "../../../index.css";

import facebookIcon from './facebook.svg';
import instagramIcon from './instagram.svg';
import emailIcon from './at-sign.svg';

export default function SocialIcons () {
    const emailAddress = "ErinMcCreaArt@gmail.com";

    const facebookLink = () => {
        window.open('https://www.facebook.com/Erinmccreaart');
    }

    const instagramLink = () => {
        window.open('https://www.instagram.com/erin.mccrea.73/');
    }
    
    return (
        <div className='socialIcons'>
            <img src={facebookIcon} alt="Facebook Icon" onClick={facebookLink} />
            <img src={instagramIcon} alt="Instragram Icon" onClick={instagramLink} />
            
            <a href={`mailto: ${emailAddress}`}><img src={emailIcon} alt="Email Icon" /></a>
        </div>
    )
}