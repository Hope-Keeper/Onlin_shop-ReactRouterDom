import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {BsHexagon} from 'react-icons/bs';
import './Features.css'
import {FeaturesList} from './data.js'
import img from '../../assets/phone-features.png'
const Features = () => {
    return ( <section id="features">

<div className="container features">
    
    <div className="title">

<BsFillBookmarkStarFill color='orangered' size={30}/>
<h2>ویژگی های اصلی</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, suscipit.</p>


    </div>
    <div className="features-content">
    <div className="features-content-right">
        <img src={img} alt="" />
    </div>
    <div className="features-content-left">
        {
           FeaturesList.map((item )=>{
            return(
                <div className="feature" key={item.id}>
                    <div className="feature-icon">
<BsHexagon color='#fc5412' size={55}></BsHexagon>
<div className="inner-icon">{item.icon}</div>


                    </div>
                    <div className="feature-text">
                        <h2>{item.heading}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            )
           })
        }
    </div></div>
    </div>

    </section> );
}
 
export default Features;