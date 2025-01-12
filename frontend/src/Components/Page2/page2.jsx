import "./page2.css"
import { useState,useEffect } from "react";
import Icon from '../../assets/stopwatch.png'
import radiologyIcon from '../../assets/radiology.png'
import homeIcon from '../../assets/home.png'

const Page2 = () => {
        const [categories, setCategories] = useState([]);
        const [packages, setPackages] = useState([]);
        const [activeCategory, setActiveCategory] = useState('Popular');
        const [filteredPackages, setFilteredPackages] = useState(packages);

        useEffect(() => {
            const getItems = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/page2`);
                    const data = await response.json();
                    setCategories(data.categoryArray);
                    const packagesData = data.healthCheckupPackages;
                    const popularData = packagesData.filter((ele) => ele.subCategories.includes("POPULAR"));
                    setPackages(packagesData);
                    setFilteredPackages(popularData);
                } catch (Err) {
                    console.log(Err);
                }
            };
        
            getItems();
        }, []); // Pass an empty dependency array
        


    const onChangeActiveCategory = (obj) => {
        setActiveCategory(obj)
        const filteredPackages = packages.filter((ele) => (ele.subCategories).includes(obj.toUpperCase()));
        setFilteredPackages(filteredPackages);
    } 
    
    return (
        <div className="col-12 page2-featured-health-checkups-container">
            <div className="page2-header-container">
                <h1 className="page2-heading1">Featured Health Check-ups</h1>
                <button className="page2-view-all-button" type="button">View All</button>
            </div>
            <ul className="page2-list-container">
                    {categories.map((ele,index) => (
                        <li className="page2-list-item" key={index+1}>
                            <button onClick={() => onChangeActiveCategory(ele)}  className={`page2-category-button ${activeCategory===ele?"active":''}`} type="button">{ele}</button>
                        </li>
                    ))}
            </ul>
            <ul className="page2-list-container">
                {filteredPackages.map((ele,index) => (
                    <li className="page2-package-list-item" key={index}>
                        <div className="page2-package-item-container">
                        {ele.isSponsored && <p className="sponsored-item">Sponsored</p>}
                            <h1 className="page2-list-heading">{ele.packageDisplayName}</h1>
                            <div className="page2-stopwatch-icon-container">
                            <img src={Icon} alt="icon"/>
                            <p className="page2-list-paragraph">{ele.reportsTatText}</p>
                            </div>
                            <div className="page2-flex-item">
                            <div className="m-3">
                            <b className="page2-list-tests">{ele.testCount} Tests</b>
                            <ul>
                                {ele.testsSummary.map((elem,indexx) => (
                                    <li className="page2-list-test-summary" key={indexx}>{elem.substring(0,15)}...</li>
                                ))}
                            </ul>
                            </div>
                            <div className="m-3">
                            <b className="page2-list-tests">Includes</b>
                            <div className="page2-stopwatch-icon-container">
                            <img src={radiologyIcon} alt="icon"/>
                            <p className="page2-list-test-summary">Radiology</p>
                            </div>
                            </div>
                            </div>
                            <div className="page2-fasting-availability ">
                                <div className="m-3">
                                    <p className="page2-list-tests"><b>Fasting</b></p>
                                    <p className="page2-list-test-summary">{ele.fastingHoursText}</p>
                                </div>
                                <div className="m-3">
                                    <p className="page2-list-tests"><b>Available</b></p>
                                    <div className="page2-stopwatch-icon-container">
                                    <img src={homeIcon} alt="icon"/>
                                    <p className="page2-list-test-summary">Home</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <b><i className="fa-solid fa-indian-rupee-sign"></i>{ele.price}</b>
                            </div>                            
                            <p className="page2-bottom-tags">{ele.tags.bottomTag}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Page2;