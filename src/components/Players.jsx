import React, { useState } from "react";

const Player = ({name,symbol,isActive}) => {
    const [isEditing,setEditing]=useState(false)
    const [editName,setEditName]=useState(name)
    const handleEditClick=()=>{
        setEditing((prev)=>!prev)
    }
    const handleChange=(e)=>{
        setEditName(e.target.value)
    }
    let editableContent=<span className="player-name">{editName}</span>
    if(isEditing){
        editableContent=<input type="text" defaultValue={editName} onChange={handleChange}/>
    }
  return (
    <li className={isActive?'active':undefined}>
      {editableContent}
      <span className="player-symbol">{symbol}</span>
      <span>
        <button className="player-action-button" onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
      </span>
    </li>
  );
};

export default Player;
