import { FC } from "react";

import "./bar.styles.css";

interface IBarProps {
  height: number;
  width: number;
  backgroundColor: string;
}

const Bar: FC<IBarProps> = (props) => {
  return (
    <div
      className="bar"
      title={props.height.toString()}
      style={{
        backgroundColor: props.backgroundColor,
        height: `${props.height}px`,
        width: `${props.width}px`,
      }}
    ></div>
  );
};

export default Bar;
