import React, {useState, useEffect} from "react";
const Counter = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
           setSeconds(prevSeconds => prevSeconds + 1) 
        },1000);
        return () => clearInterval(interval);
    }, [] );
    return (
        <div className="text-center p-6">

        <div className="text-6x1 font-bold">
            {seconds}
        </div>
        <div className="text -x1 mt-2">
            segundos
        </div>

        </div>
    )








}
export default Counter;