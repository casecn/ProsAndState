import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Picker() {
  const [selectedColor, setSelectedColor] = useState ('');
  const selectColor = (colorName) => {setSelectedColor(colorName)}
  const Color = (props) => {
    return <div className={props.color} onClick={() => props.selectColor(props.color)} />
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" selectColor={selectColor} />
        <Color color="blue" selectColor={selectColor} />
        <Color color="green" selectColor={selectColor} />
      </div>
    </div>
  );
}



ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);