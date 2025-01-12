import { useState } from "react";

const Home = () => {
    const [count,setCount] = useState(0);

    return (
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://views.medibuddy.in/mb-config/IMAGE/philips_track_your_health_labs_banner_1731064505053.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://views.medibuddy.in/mb-config/IMAGE/labs_sunday_slots_banner_1734692906235.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://views.medibuddy.in/labs/HomeScreenBanners/AndroidMB/labs-surgery-banner.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Home;