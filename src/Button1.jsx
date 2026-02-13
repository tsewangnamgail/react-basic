
function Button1(){
    // Handles button click event

    //const handleClick=()=>console.log(`ouch!`)
    //const handleClick2=(name)=>console.log(`${name}stop clicking me!`);
    //return (<button onClickCapture={()=>handleClick2("tsewang")}>Click me </button>)

    // let count=0;
    // const handleClick=(name)=>{
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // };
    //return (<button onClick={()=>handleClick("tsewang")}>Click me </button>)

    const handleClick=(e)=>e.target.textContent="ouch!";
    return (<button onClick={(e) => handleClick(e)}>click me</button>);

}
export default Button1