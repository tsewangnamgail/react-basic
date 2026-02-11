import profilepic from './assets/download.jpeg'
function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"></img>
            <h2 className="card-title">Tsewang Namgail</h2>
            <p className="cart-text">I am a Student at bannari amman institute of technology</p>
        </div>
    );
}
export default Card