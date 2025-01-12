import { useEffect, useState } from "react"

import "./page1.css"

const Page1 = () => {
    const [imageItems1, setImageItems1] = useState([]);
    const [imageItems2, setImageItems2] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/page1`);
                const data = await response.json();
                const {page1Images1,page1Images2} = data;
                setImageItems1(page1Images1[0]["props"]);
                setImageItems2(page1Images2[0]["props"]);
            }
            catch(Err) {
                console.log(Err);
            }
        }

        getItems();
    })

    return (
        <div className="col-12">
            <div className="page1-search-bar-container">
                <input className='page1-search-input' placeholder="Find lab tests, diagnostics centres" type="text"/>
                <i className="page1-search-icon fa-solid fa-magnifying-glass"></i>
            </div>

            {/* Icons Section */}
            <div className="col-12 mb-3 mt-3">
                <ul className="page1-list-container">
                    {imageItems1.map((ele,index) => (
                        <li key={index} className="page1-image-item-container">
                            <a className="page1-link" href={ele.deeplink} rel="noreferrer">
                                <img className="page1-image-item" src={ele.iconUrl} alt="icon-image"/>
                                <h4 className="page1-text-item">{ele.iconText}</h4>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Banner Section */}
            <div id="carouselExampleSlidesOnly" className="col-12 mb-3 mt-3 carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imageItems2.map((ele, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <a target="_blank" rel="noreferrer" href={ele.deeplink}>
                        <img
                            src={ele.bannerUrl}
                            className="d-block w-100"
                            alt={`banner-${index}`}
                        />
                        </a>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Page1