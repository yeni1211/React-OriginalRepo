import React from "react";
import { Label } from "./Label";

export function Menu() {
  return (
    <div style={styles}>
      <Label name="Products" hoverStyle={labelHoverStyles} />
      <Label name="Industries" hoverStyle={labelHoverStyles} />
      <Label name="Customers" hoverStyle={labelHoverStyles} />
      <Label name="Learning" hoverStyle={labelHoverStyles} />
      <Label name="Support" hoverStyle={labelHoverStyles} />
      <Label name="Companys" hoverStyle={labelHoverStyles} />
      <Label name="Salesforce +" hoverStyle={labelHoverStyles} />
    </div>
  );
}

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "white",
  //   borderBottom: "1px solid #ddd",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  color: "#333",
  gap: "20px",
};

const labelHoverStyles: React.CSSProperties = {
  color: "#5BA3F0",
  fontWeight: "bold",
};
