import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css';

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Coffee.</span>
                <span>Develop.</span>
                <span>Repeat.</span>
            </div>
        </div>
    )
}

export default Preloader