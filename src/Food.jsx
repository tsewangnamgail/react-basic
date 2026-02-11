function Food(){
    //but outside you dont need {}
    const food1="orange";
    const food2="banana";


    //you need{} inside the return statement
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food