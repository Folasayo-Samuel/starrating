import React from "react";
import "./App.css";

function Star({ marked, starId }) {
  return (
    <div className="App">
      <span
        className="starStyling"
        star-id={starId}
        style={{ color: "#ff9933" }}
        role="button"
      >
        {marked ? "\u2605" : "\u2606"}
      </span>
    </div>
  );
}

function StarRating(props) {
  const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );
  const [selection, setSelection] = React.useState(0);
  const hoverOver = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(event) =>
        setRating(event.target.getAttribute("star-id") || this.state.rating)
      }
      onMouseOver={hoverOver}
      className=""
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}

export default StarRating;
