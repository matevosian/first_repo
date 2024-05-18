import img from '../assets/images/image.jpg';
import './card.css';
function Card() {
    return(
        <div className="cards">
            <div className="headerDiv">
            <img src={img} className="img"/>
        <h1 className="header">
            Leslie Walton
        </h1>
        <p className="paragraph">@lisliev</p>
        <p className="paragraph">Product Designer, Kyiv</p>
            </div>
        <div className="numsParentDiv">
        <div className="numsDiv">
            <p className="num">
                17
            </p>
            <p className="paragraph">
                SHOTS
            </p>
        </div>
        <div className="numsDiv">
            <p className="num">
                143
            </p>
            <p className="paragraph">
                FOLLOWING
            </p>
        </div>
        <div className="numsDiv">
            <p className="num">
                57
            </p>
            <p className="paragraph">
                FOLLOWERS
            </p>
        </div>
        </div>
        <div className="btnDiv">
        <button className="button">Send message</button>
        <a href="" className="link">
        <p className="paragraph">
            MORE ^
        </p>
        </a>
        </div>
        <div className="plus">+</div>
    </div>
    )
};
 export default Card;