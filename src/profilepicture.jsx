function ProfilePicture(){

    const myimageurl = './src/assets/download.jpeg';
    const handleClick = (e) => e.target.style.display="none";

    return (
        <img onClick={(e)=> handleClick(e)} src={myimageurl} alt="profile" />
    );
}

export default ProfilePicture;
