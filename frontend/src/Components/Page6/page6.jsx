import "./page6.css"
import { useState,useEffect } from "react";

const Page6 = () => {
    const [items1, setItems1] = useState([]);

        useEffect(() => {
            const getItems = async () => {
                try {
                    const response1 = await fetch(`${process.env.REACT_APP_API_URL}/faqs`);
                    const data1 = await response1.json();
                    // const response2 = await fetch(`${process.env.REACT_APP_API_URL}/bookhealthpackages`);
                    // const data2 = await response2.json();
                    const {faqs} = data1;
                    const finalData = faqs.map((ele) => {
                        return {
                            ...ele,isActive:false
                        }
                    });
                    setItems1(finalData);
                }
                catch(Err) {
                    console.log(Err);
                }
            }

            getItems();
        },[])

        const onToggleButton = (value) => {
            const filteredData = items1.map((ele) => {
                if(ele.id===value){
                    return {...ele,isActive:!ele.isActive}
                }
                return ele
            })
            setItems1(filteredData);
        }

        return (
            <div className="col-12 mb-3 mt-3">
                <h1 className="page6-heading">Frequently Asked Questions</h1>
                <ul className="page6-list-container">
                    {items1.map((ele,index) => (
                        <li className="page6-list-item" key={index}>
                            <div className="w-80 page6-question-container">
                            <div>
                            <p className="page6-question">{ele.question}</p>
                            {ele.isActive && (
                                <>
                                <p className="page6-answer">{ele.answer}</p>
                                <ul>
                                   {ele.points.map((elem) => (
                                    <li>{elem.pnt}</li>
                                   ))} 
                                </ul>
                                </>
                                )}
                            </div>
                            {!ele.isActive && <button onClick={() => onToggleButton(ele.id)} type="button" className="w-10 page6-plus-button"><i className="fa-solid fa-circle-plus fa-2x"></i></button>}
                            {ele.isActive && <button onClick={() => onToggleButton(ele.id)} type="button" className="w-10 page6-plus-button"><i className="fa-solid fa-circle-minus fa-2x"></i></button>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default Page6;