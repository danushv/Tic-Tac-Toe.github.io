import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing((editing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let buttonCaption = "Edit";
  let EditablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    EditablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleClick}>{buttonCaption}</button>
    </li>
  );
}
