import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../context/color";

const colors = ["red", "blue", "yellow", "orange", "green", "black"];

const SelectColors = () => {
  const { action } = useContext(ColorContext);
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>원하는 색상을 선택해주세요.</h2>
      <div style={{ display: "flex", justifyContent: 'center' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "40px",
              height: "40px",
              marginRight: '5px',
              cursor: "pointer",
            }}
            onClick={() => action.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              action.setSubColor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
