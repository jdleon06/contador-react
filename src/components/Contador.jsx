import { useState } from "react";
import './Contador.css'


function Contador() {
    
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleRestart = () => {
        setCount(0)
    }

    return (
        <div className="count-all">
            <div className="count">
                <p>{count}</p>
            </div>
            <div className="count-button">
                <button type="button" onClick={handleCount}>Clic</button>
                <button type="button" onClick={handleRestart}>Restart</button>
            </div>
        </div>
    );
}

export default Contador;