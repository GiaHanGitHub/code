import React, { useState } from "react";

function TinhTong(){

    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');
    const [sum ,setSum] = useState('');

    const handleChange1 = (e) =>{
        setNum1(e.target.value);
    };

    const handleChange2 = (e) =>{
        setNum2(e.target.value);
    };

    const tinhTong = () => {
        setSum(parseInt(num1)+parseInt(num2));
    };

    return (
        <div>
            num1: <input type="number" value={num1} onChange={handleChange1}></input>
            num1: <input type="number" value={num1} onChange={handleChange2}></input>
            <button style={{position:'absolute',top:'0',margin:'100px 100px'}} onClick={tinhTong}>Tinh tong</button>
            <div>
                Tong: {sum}
            </div>
        </div>
    );
};

export default TinhTong;