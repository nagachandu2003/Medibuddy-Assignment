import { useState,useEffect } from "react";
import "./page3.css"
import rating from '../../assets/rating.png'

const Page3 = () => {
    const [imageItems1, setimageItems1] = useState([]);
    const [imageItems2, setImageItems2] = useState([]);

    useEffect(() => {
            const getItems = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/whatouruserssay`);
                    const data = await response.json();
                    const {whatouruserssay,features} = data;
                    setimageItems1(whatouruserssay);
                    setImageItems2(features);
                }
                catch(Err) {
                    console.log(Err);
                }
            }
    
            getItems();
        },[])

        return (
            <>
            <div className="col-12 mb-3 mt-3">
            <h1 className="page3-heading">Trusted by <b>20,00,000+</b> Users Every month</h1>
            <ul className="page3-list-container">
                {imageItems2.map((ele,index) => (
                    <li className="page3-image-item-container" key={index}>
                        <img className="page3-image" src={ele.img} alt="img"/>
                        <ul className="page3-list-container2">
                        <li className="page3-image-heading">{ele.title}</li>
                        <li className="page3-image-text">{ele.subTitle}</li>
                        <li className="page3-image-text">{ele.subText}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
        <div className="col-12 mb-3 mt-3">
        <h1 className="page3-heading">What our Users Say?</h1>
        <ul className="page3-list-container3">
            {imageItems1.map((ele,index) => (
                <li className="page3-image-item-container2" key={index}>
                    <div className="page3-comment-header">
                        <div className="d-flex">
                        <img className="rating-image" src={rating} alt="rating"/>
                        <p className="page3-days-text">{ele.days}</p>
                        </div>
                        <div className="d-flex align-center">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="page-user-content mt-0 ml-3">Bangalore</p>
                        </div>

                    </div>
                    <p className="page3-user-content">{ele.content.substring(0,150)}...</p>
                    <p className="page3-user-name">{ele.name}</p>
                </li>
            ))}
        </ul>
    </div>
    </>
        )
}

export default Page3