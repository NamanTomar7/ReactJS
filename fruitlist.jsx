export default function Fruitlist(){

    const fruits=[
        {id: "", name:"Apple", color: "Red"},
        {id: "", name:"Banana", color:"Yellow"},
        {id: "", name:"Grapes", color:"Green"}
    ];

    return(
        <div>
            <h1>List of fruits</h1>
            <ul>
                {fruits.map((fruit)=>(
                <li key={fruit.id}>{fruit.name}-{fruit.color}</li>
                ))}
            </ul>
        </div>
    );
}