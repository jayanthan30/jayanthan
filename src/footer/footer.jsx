import React from 'react';
import './footer.css';
import fb from '../assets/fbimg.png';
import twitter from '../assets/twitterimg.png';
import linkedin from '../assets/linkedinimg.png';
import insta from '../assets/instaimg.png';
const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>ABOUT</h4>
            <a href="/employer">
                <p>YOY is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations.</p>
            </a>
         
        </div>
        <div className="sb__footer-links_div">
            <h4>CONTACT INFORMATION</h4>
            <a href="/resource">
                <p>Engage with the world around you</p>
            </a>
            <a href="/healthplan">
                <p>✆8754604870</p>
            </a>
            <a href="/individual">
                <p>@gmail.com</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>SUBSCRIBE US</h4>
            <a href="/employer">
                <p>World's leading chain of hotels and homes
Join our network and grow your business!

</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/press">
                <p>Press</p>
            </a>
            <a href="/career">
                <p>Career</p>
                </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <p><img src={fb} alt=""/></p>
                <p><img src={twitter} alt=""/></p>
                <p><img src={linkedin} alt=""/></p>
                <p><img src={insta} alt=""/></p>
            </div>
          </div>
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/privacy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        <a href="/cookie"><div><p>Cookie  Declaration</p></div></a>
    </div>
</div>
        </div>
        </div>
        
    )
}
export default Footer;