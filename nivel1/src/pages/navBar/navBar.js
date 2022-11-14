import { Link } from "react-router-dom";
import {Banner, BannerTop, TopLeft, TopRight, BannerButtom} from "./navBarStyles"
import starWarsLogo from "../../assets/img/starWarsLogo.jpg"
import index from "../../assets/img/index.jpg";

const Navbar = () => {
    return(
        <div>
            <Banner>
                <BannerTop>
                    <TopLeft>
                        <img src={starWarsLogo} alt="StarWars"/>
                    </TopLeft>
                    <TopRight>
                        <ul>
                            <li><Link to= '/login/'>LOG IN</Link></li>
                            <li className = 'signClass'><Link to= '/SignUp'>SIGN UP</Link></li>
                        </ul>
                    </TopRight>
                </BannerTop>
                <BannerButtom>
                    <ul>
                        <li><Link to= '/home/'>HOME</Link></li>
                        <li><Link to= '/naves/'>STARSHIPS</Link></li>
                        <li>NEWS + BLOGS</li>
                        <li>VIDEO</li>
                        <li>FILMS</li>
                        <li>SERIES</li>
                        <li>INTERACTIVE</li>
                        <li>COMMUNITY</li>
                        <li>DATABANK</li>
                        <li>DISNEY+</li>
                    </ul>
                </BannerButtom>
                <img className="mainIm" src={index} alt="StarWars"/>
            </Banner>
    
    </div>
    )    
}

export default Navbar;