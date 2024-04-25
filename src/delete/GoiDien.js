import { useState } from "react";

function QuaySo(){

    const [num,setNum] = useState('');

    const handleClick = (number) =>  {
        setNum(num + number);
    };


    return (
        <div>
            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <p>SDT: {num}</p>
        </div>
    )
};
export default QuaySo;