import { Link } from "react-router-dom";
import { Button } from "../../generalStyles";
import { HomeContainer } from "./homeStyles";

const Home =() => {
return(
    <div>
        <HomeContainer>
            <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+<br /><br />
            The Star Wars universe is not just about lightsabers. There are also plenty of intriguing spaceships to love!  </p>
            <p>Click the button to explore it</p>
            <br/><br/>
            <Link to= '/naves/'><Button>MAY THE FORCE BE WITH YOU</Button></Link>
       </HomeContainer>
    </div>
)

}

export default Home; 
