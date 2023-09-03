
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import{TiSocialGooglePlus} from 'react-icons/ti'
const Subscribe = () => {
    return ( <><section id="subscribe">
        <div className="subscrib container">
            <h2>حالا مشترک شوید</h2>
            <form >
                <button>مشترک شوید</button>
                <input type="text" placeholder="...ایمیل خود را وارد کنید"/>
            </form>

<div className="socials">
    <div className="social-icon">
        
            <FaInstagram/>
     
    </div>

    <div className="social-icon">
        
        <FaTwitter/>
 
</div>

<div className="social-icon">
        
        <FaFacebook/>
 
</div>
<div className="social-icon">
        
        <TiSocialGooglePlus/>
 
</div>


</div>





        </div>
        </section></> );
}
 
export default Subscribe;