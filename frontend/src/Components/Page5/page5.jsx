import { useEffect, useState } from "react";
import "./page5.css"
import Icon1 from '../../assets/labtests1.png'
import Icon2 from '../../assets/labtests2.png'
import Icon3 from '../../assets/labtests3.png'
import Icon4 from '../../assets/labtests4.png'
import Icon5 from '../../assets/howitworks1.png'
import Icon6 from '../../assets/howitworks2.png'
import Icon7 from '../../assets/howitworks3.png'



const items2 = [
        {
            "id" : 1,
            "imgSrc" : Icon2,
            "content" : "Gov. Approved Diagnostic Centres"
        },
        {
            "id" : 2,
            "imgSrc" : Icon1,
            "content" : "Daily Temperature Check of all Technicians"
        },
        {
            "id" : 3,
            "imgSrc" : Icon3,
            "content" : "Mandatory use of Mask & Sanitizers"
        },
        {
            "id" : 4,
            "imgSrc" : Icon4,
            "content" : "Regular Disinfectation of Labs"
        }
    ]

const Page5 = () => {
    const [items1, setItems1] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response1 = await fetch(`${process.env.REACT_APP_API_URL}/howitworks`);
                const data1 = await response1.json();
                // const response2 = await fetch(`${process.env.REACT_APP_API_URL}/bookhealthpackages`);
                // const data2 = await response2.json();
                const {howitworks} = data1;
                setItems1(howitworks);
                
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
            <h1 className="page5-heading">How it Works?</h1>
            <ul className="page5-list-container">
                {items1.map((ele,index) => (
                    <li className="page5-image-item-container" key={index}>
                        <img className="page5-image" src={ele.img} alt="img"/>
                        <p className="page5-image-text">{ele.pnt}</p>
                    </li>
                ))}
            </ul>
        </div>
                <div className="col-12 mb-3 mt-3">
                <h1 className="page5-heading">100% Safe & Secure Lab Tests</h1>
                <ul className="page5-list-container2">
                    {items2.map((ele,index) => (
                        <li className="page5-image-item-container2 page5-cont" key={index}>
                            <img className="page5-image" src={ele.imgSrc} alt="img"/>
                            <p className="page5-image-text2">{ele.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            </>
    )

}

export default Page5