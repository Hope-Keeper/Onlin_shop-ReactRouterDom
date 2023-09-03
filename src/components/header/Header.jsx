import './Header.css'
import img from '../../assets/phone-header-bg.png'
import {BsMouse} from 'react-icons/bs';


const Header = () => {
    return (
    <section id="header">
<div className="container header">
    <div className="header-right">
    <h1>
<span>پیشرودرسطح جهانی</span>
<span>امنیت </span>
<span>سیستم</span>
    </h1>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
    <div className="header-btn">
        <a className="btn btn-dark" href=""> start </a>
        <a className="btn btn-light" href="">how</a>
    </div>

    </div>
    
    
    
    
    <div className="header-left">
        <img src={img} alt="" />
    </div>
</div>
<div className="floating-icon">
<a href="#features">
    <BsMouse color='#fff' size={25} className="mouse"/>
</a>


</div>

    </section>  );
}
 
export default Header;