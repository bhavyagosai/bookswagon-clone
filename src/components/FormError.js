import React from "react";

function FormError({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <p
      className="text-xs text-error"
      //   style={{
      //     fontSize: "0.8em",
      //     fontFamily: `"Raleway", sans-serif`,
      //     color: "#DC143C",
      //     marginTop: "-5px",
      //     marginBottom: "-10px",
      //   }}
    >
      {error}
    </p>
  );
}

export default FormError;
