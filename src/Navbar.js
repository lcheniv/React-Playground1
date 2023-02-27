import React from "react";
import './Navbar.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


function Navbar() {
    return(
        
        <div className="nav-bar2" >
            <nav>
                <ul>
                    <li><a href="https://www.lawrencecheniv.com">
                            <img src="/home.png" alt="test" width="20" height="20"/>
                        </a>
                    </li> 
                    <br></br>
                    <li> 
                        <a href="https://www.lawrencecheniv.com"> <img src="/web.png" alt="test" width="20" height="20"/>
                        </a>
                    </li>
                    <br></br>
                    <li> 
                        <a href="https://www.lawrencecheniv.com"> <img src="/book.png" alt="test" width="20" height="20"/>
                        </a>
                    </li>
                    <br></br>
                </ul>
            </nav>
        </div>
    );
} export default Navbar;