import React, { Component } from 'react';
import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa';
import './Download.css'


const Download = () => {
    return ( <>
    <section id="download">
        <div className="download container">
            <div className="download-title">
                <h2>دانلود اپ ما</h2>
<p>برنامه ها موجود است</p>




            </div>
            <div className="download-content">
                <div className="download-apps">
                    <div className="download-app">
                       <FaApple/>
                       <p>آیفون</p> 
                    </div>
                    <div className="download-app">
                       <FaWindows/>
                       <p>ویندوز</p> 
                    </div>
                    <div className="download-app">
                       <FaAndroid/>
                       <p>اندروید</p> 
                    </div>
                </div>
            </div>
            </div>
    </section>
    </> );
}
 
export default Download;