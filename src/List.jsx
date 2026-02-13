import PropTypes from "prop-types";
function List(props){
    const category=props.category;
    const itemList=props.items;

    // // Sort alphabetically
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    //fruits.sort((a,b)=>a.calories-b.calories);
    //fruits.sort((a,b)=>b.calories-a.calories);

    //const lowCalFruits=fruits.filter(fruit=>fruit.calories<100);
    //const highCalFruits=fruits.filter(fruit=>fruit.calories>100);

    const listitems = itemList.map(item=> 
        <li key={item.id}>
            {item.name} :&nbsp;
            <b>{item.calories}</b>
        </li>
    );

    return (<>
        <h2 className="list-category">{category}</h2>
        <ol className="list-items">{listitems}</ol>
        </>
    );
}
List.PropTypes={
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            calories:PropTypes.numbers}))
}
List.defaultProps={
    category:"category",
    items:[],
}

export default List;
