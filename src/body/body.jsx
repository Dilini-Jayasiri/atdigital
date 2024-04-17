import React from "react";
import './body.css';
import mainimg from "../assets/mainimg.jpg";
import description from "../assets/description.png";
import search from "../assets/search.png";

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="body-title">
                    <div className="body-image">
                        <img src={mainimg} alt="mainimg" />
                        <div className="overlay">
                            <div className="gradient-div">
                                <div className="caption">
                                    <h2>We Crush Your <br/>Competitors, Goals, And <br/>Sales Records - Without <br/>The B.S.</h2>
                                </div>
                                <button className="btn">GET FREE CONSULTATION</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="content-container-description">
                    <div className="content">
                        <img src={description} alt="description" />
                        <div className="content-text">
                            <h4>Web & Mobile App Development</h4>
                            <p>Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        </div>
                    </div>
                </div>

                <div className="content-container-search">
                    <div className="content">
                        
                        <div className="content-text">
                            <h4>Digital Strategy Consulting</h4>
                            <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        </div>
                        <img src={search} alt="search" />
                    </div>
                </div>

                <div className="content-container-qna">
                    <div className="content-bar">
                        <h4>Frequently asked questions</h4>
                        <h5>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?                    -</h5>
                        <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer</p>
                        <h5>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?              +</h5>
                        <h5>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?               +</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;
