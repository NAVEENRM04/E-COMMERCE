import React from "react";
import half from "../Images/half.png";
// import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Slider from "react-slick";
import "../Css/List.css";
import { Link } from "react-router-dom";
import { useStates } from "../States";
// import { useStates } from "../States";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const { setFilterChoice } = useStates();
  // const {user} = useStates();
  //  console.log(user);
  //  console.log(user?.uid);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
  };
  return (
    <>
      <div className="home_page_content">
        {/* <ImageSlider slides={SliderData} /> */}
        <div className="option-bar">
          <button id="mybtn" type="button" className="style">
            Fruits
          </button>
          <button id="mybtn" type="button" className="style">
            Staple
          </button>
          <button id="mybtn" type="button" className="style">
            Dairy & Eggs
          </button>
          <button id="mybtn" type="button" className="style">
            Snacks
          </button>
          <button id="mybtn" type="button" className="style">
            Vegetables
          </button>
          <p>Available Offers</p>
        </div>
        <div className="slider_carosal">
          <Slider {...settings}>
            {SliderData.map((data,i) => {
              return (
                <div className="carosal_div">
                  <img src={data.image} alt="" key={i} />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="half">
          <img src={half} alt="half" className="half-pg" />
        </div>
        <div className="offers">
          <Link to="/product">
            <div
              className="box1"
              onClick={function (event) {
                setFilterChoice("Fruits");
              }}
            >
              <p className="twenty">₹50 off on Fruits*</p>
              <img
                src="https://res.cloudinary.com/do4m8xtim/image/upload/v1670251417/apple_cjzjqz.jpg"
                alt="apple"
                className="brands1"
              />
              <img
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409230/orange_zpcot1.jpg"
                alt="orange"
                className="brands2"
              />
              <img
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409233/strawberry_s1rlm3.jpg"
                alt="sberry"
                className="brands3"
              />
              <img
                src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409222/grapes_uzg7kt.jpg"
                alt="grapes"
                className="brands4"
              />
            </div>
            <div
              className="box2"
              onClick={function (event) {
                setFilterChoice("Snacks");
              }}
            >
              <p className="fourty">20% Off on Snacks</p>
              <div className="fruits">
                <img
                  src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409225/lays_z3olhk.jpg"
                  alt="fortune"
                  className="brands5"
                />
                <img
                  src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409230/nice_euyoc0.jpg"
                  alt="fortune"
                  className="brands6"
                />
                <img
                  src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409231/pepsi_qoag7k.webp"
                  alt="fortune"
                  className="brands7"
                />
                <img
                  src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1670409565/jimjam_zir7om.bmp"
                  alt="fortune"
                  className="brands8"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
