function List(){
    const fruits = [
        {id:1, name:"apple", calories:95},
        {id:2, name:"banana", calories:54},
        {id:3, name:"orange", calories:66},
        {id:4, name:"papaya", calories:93}
    ];

    // // Sort alphabetically
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    //fruits.sort((a,b)=>a.calories-b.calories);
    //fruits.sort((a,b)=>b.calories-a.calories);

    const listitems = fruits.map(fruit => 
        <li key={fruit.id}>
            {fruit.name} :&nbsp;
            <b>{fruit.calories}</b>
        </li>
    );

    return (<ol>{listitems}</ol>);
}

export default List;
