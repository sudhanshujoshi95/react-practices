import { useState } from "react";

export default function Counter(){
    const [number, setNumber] = useState(0);

        function handleClick(e){
            e.stopPropagation();
            setNumber(number+1);
        }
    return( 
        <>
        <h2>{number}</h2>
        <button onClick={handleClick}>Press Me!</button>
        </>
    );
}