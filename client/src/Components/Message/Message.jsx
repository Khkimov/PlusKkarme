import React from "react";

export default function Message({ el, style }) {
  return <div style={style}>{el.text}</div>;
}
