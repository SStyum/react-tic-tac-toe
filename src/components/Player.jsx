import { useState } from "react";

const Player = ({ name, symbol }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleEditClick = () => {
        setIsEditing(prevState  => !prevState);
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type="text" required  value={playerName} onChange={handleChange} />;
    };

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button className="" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};

export default Player;