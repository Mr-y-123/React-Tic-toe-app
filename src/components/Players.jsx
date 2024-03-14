import { useState } from "react";

const Player = ({ name, symbol, isActive, handleChange }) => {
  const [isEditing, setEditing] = useState(false);
  const handleEditClick = () => {
    setEditing((prev) => !prev);
  };
  let editableContent = <span className="player-name">{name}</span>;
  if (isEditing) {
    editableContent = (
      <input
        type="text"
        name={symbol}
        onChange={handleChange}
        defaultValue={name}
        className="input-editableContent"
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      {editableContent}
      <span className="player-symbol">{symbol}</span>
      <span>
        <button className="player-action-button" onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
};

export default Player;
