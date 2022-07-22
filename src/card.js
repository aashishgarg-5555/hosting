import {useState} from 'react';

function Card(){

    let [name,setName] = useState("Iron Man");

    
    function magic(){
        setName("Aashish Garg");
    }
    
    return(
        <div className="card">
            <h1 className="h1">I AM THE SENSATIONAL</h1>
            <h1>{name}</h1>
            <button className="btn" onClick={magic}>see magic</button>
        </div>
    )
}

export default Card;