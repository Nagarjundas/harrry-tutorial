import React, { useState } from "react";

export default function About() {
  const [myStyle, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [mybtnStyle, setbtnStyle] = useState("switch to light Mode");

  const darkModeFunc = () => {
    // eslint-disable-next-line eqeqeq
    if (myStyle.color == "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnStyle("switch to light Mode");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnStyle("switch to dark Mode");
    }
  };

  return (
    <div>
      <div className="container" style={myStyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>

            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="container my-3">
          <button className="btn btn-primary" onClick={darkModeFunc}>
            {mybtnStyle}
          </button>
        </div>
      </div>
    </div>
  );
}
