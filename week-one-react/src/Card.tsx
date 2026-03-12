import Profilepic from "./assets/potential.jpg"

function Card(){
    return(
        <div className="card"> 
            <img className= "card-image" alt="Profile picture" src={Profilepic} style={{width:"60%", height:"70%"}}></img>
            <h2 className="card-title">Bruv</h2>
            <p className="card-text">I'm a fucking bruv</p>
        </div>
    );
}

export default Card