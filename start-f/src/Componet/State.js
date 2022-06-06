import React, {useState} from 'react';

function State() {

    const [name, setName] = useState("MIKE");

    function ChangeName() {
        var newName = name == "MIKE"
            ? "JANE"
            : "MIKE";
        setName(newName);
    };

    return (
        <div>
            <h1>STATE</h1>
            <h2 id='name'>{name}</h2>
            <button onClick={ChangeName}>Change BTN</button>
        </div>
    );
};

export default State;
