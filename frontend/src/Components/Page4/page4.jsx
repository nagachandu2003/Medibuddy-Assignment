import "./page4.css"
import { useState,useEffect } from "react";

const Page4 = () => {
    const [imageItems1, setimageItems1] = useState([]);
    const [imageItems2, setImageItems2] = useState([]);

    useEffect(() => {
            const getItems = async () => {
                try {
                    const response1 = await fetch(`${process.env.REACT_APP_API_URL}/gethealthcheckpackages`);
                    const data1 = await response1.json();
                    const response2 = await fetch(`${process.env.REACT_APP_API_URL}/bookhealthpackages`);
                    const data2 = await response2.json();
                    const {healthcheckpackages} = data1;
                    const {healthpackages} = data2;
                    setimageItems1(healthcheckpackages);
                    setImageItems2(healthpackages);
                }
                catch(Err) {
                    console.log(Err);
                }
            }
    
            getItems();
        },[])


    return (
        <div className="col-12">
        <div className="col-12">
            <h1 className="page4-list-heading">LifeStyle Health Check Packages</h1>
        <div className="col-12 mb-3 mt-3">
                <ul className="page4-list-container">
                    {imageItems1.map((ele,index) => (
                        <li key={index} className="page4-image-item-container">
                                <img className="page4-image-item" src={ele.imgSrc} alt="icon-image"/>
                                <h4 className="page4-text-item">{ele.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        <div className="col-12">
        <h1 className="page4-list-heading">Book Health Check Packages in Bengaluru</h1>
        <div className="col-12 text-center mb-3 mt-3">
    <ul className="page4-list-container2">
        {imageItems2.map((ele, index) => (
            <li key={index} className="page4-image-item-container2">
                <div className="image-container">
                    <img className="page4-image-item2" src={ele.imgSrc} alt="icon-image" />
                    <p className="page4-text-item page4-inner-text">{ele.label}</p>
                </div>
            </li>
        ))}
    </ul>
</div>

        </div>
        </div>
    )
}

export default Page4;