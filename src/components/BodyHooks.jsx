import React, {useEffect, useState} from "react";

function BodyHooks(){
    const [count, setCount] = useState(0)
    const [count2, setcount2] = useState(10)
    
    //this hook only runs at load time
    // useEffect(() => {
    //     console.log(count)
    // }, [])

    useEffect(()=> {
        console.log(count)
    }, [count])

    useEffect(()=> {
        console.log(count2)
    }, [count2])

    return(
        <React.Fragment>
            <button type="button" className="btn btn-primary" on onClick={() => {setCount(count + 1)}}>
                {count}
            </button>
            <button type="button" className="btn btn-primary" on onClick={() => {setcount2(count2+10)}}>
                {count2}
            </button>
        </React.Fragment>
    )
}

export default BodyHooks