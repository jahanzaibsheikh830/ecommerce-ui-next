import React, { useEffect } from "react";

export default function UseOutsideClick(ref, callback) {
  const handler = (event) => {
    if (ref.current !== null && ref.current.contains(event.target) === false) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handler);
  }, []);
  return () => {
    document.removeEventListener("click", handler);
  };
}
