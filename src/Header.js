import React from "react";

function Header() {

    return(
        <div className="navbar">

            {/* <section class="showcase">
                <video src="/plant.mp4" autoplay loop muted></video>
                <h1 class="title">PLANT TEST</h1>
            </section> */}

            <div className="right-links">
                <a href="https://www.lawrencecheniv.com">Web</a>
                <a href="https://www.lawrencecheniv.com/about">About</a>
                <a href="https://www.lawrencecheniv.com/creativemedia">Works</a>
            </div>
    
            <div className="gon-image">
                <span class="floating-asterisk">*</span>
            </div>
        </div>
    );
}

export default Header;