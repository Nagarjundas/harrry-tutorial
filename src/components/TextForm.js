import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleupperClick = () => {
    // console.log("handle click function is called" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('upperCase successful',"success")
  };

  const handlelowerClick = () => {
    // console.log("handle click function is called" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('lowerCase successful',"success")
  };

  const onchangeFunction = (event) => {
    // console.log("on change is called ");
    setText(event.target.value);
    
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('clear text successful',"success")
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();

    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('PC is speaking',"speaking")
  };
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="form-floating">
          <textarea
            className="form-control"
            rows="42"
            cols="50"
            style={{height: "180px"}}
            value={text}
            onChange={onchangeFunction}
          ></textarea>
        </div>

        <button
          className=" btn btn-primary mx-2 my-1"
          onClick={handleupperClick}
        >
          Convert to upperCase
        </button>
        <button
          className=" btn btn-primary mx-2 my-1"
          onClick={handlelowerClick}
        >
          Convert to lowerCase
        </button>

        <button
          className=" btn btn-primary mx-2 my-1"
          onClick={handleclearClick}
        >
          clear text
        </button>
      </div>

      <button
        type="submit"
        onClick={speak}
        className="btn btn-warning mx-2 my-2"
      >
        Speak
      </button>

      <div className="container my-3">
        <h3>text infomation </h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          it will take <b>{0.004 * text.split(" ").length}mins </b> to read{" "}
        </p>
        <h4 className="my-2">Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
