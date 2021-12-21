import React from "react";

function Info({views,uploaded}){
    return <div>
        <h1>{"React Today and Tomorrow and 90% Cleaner React With Hooks"}</h1>
        <p>{views+" Views | Uploaded "+uploaded}</p>
    </div>

}

export default Info