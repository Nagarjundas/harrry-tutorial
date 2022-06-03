import React from "react";

export default function Alert(props) {
  const frstletterCap = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alerts && (
      <div>
        <div
          className={`alert alert-${props.alerts.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{frstletterCap(props.alerts.type)}</strong> :{" "}
          {props.alerts.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}
