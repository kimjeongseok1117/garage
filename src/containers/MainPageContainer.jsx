import React from "react";
import { Button2 } from "../components/Button2";

const MainPageContainer = () => {
  return (
    <div className="MainPageContainer">
      <div className="buttons">
        <Button2 size="large">Button</Button2>
        <Button2>Button</Button2>
        <Button2 size="small">Button</Button2>
      </div>
      <div className="buttons">
        <Button2 color="gray" size="large">
          Button
        </Button2>
        <Button2 color="gray">Button</Button2>
        <Button2 color="gray" size="small">
          Button
        </Button2>
      </div>
      <div className="buttons">
        <Button2 color="pink" size="large">
          Button
        </Button2>
        <Button2 color="pink">Button</Button2>
        <Button2 color="pink" size="small">
          Button
        </Button2>
      </div>
      <div className="buttons">
        <Button2 size="large" outline={true}>
          Button
        </Button2>
        <Button2 color="gray" outline={true}>
          Button
        </Button2>
        <Button2 color="pink" size="small" outline={true}>
          Button
        </Button2>
      </div>
      <div className="buttons">
        <Button2 size="large" fullWidth className="custromizde-Button">
          Button
        </Button2>
        <Button2 size="large" color="gray" fullWidth>
          Button
        </Button2>
        <Button2
          size="large"
          color="pink"
          fullWidth
          onClick={() => {
            console.log("클릭");
          }}
          onMouseMove={() => {
            console.log("마우스무브");
          }}
        >
          Button
        </Button2>
      </div>
    </div>
  );
};

export default MainPageContainer;
