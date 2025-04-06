import { Button } from "./Button";
import { Logo } from "./Logo";
import { SecondMenu } from "./SecondMenu";

export function SectionTwoHeader() {
  return (
    <div style={trailheadSectionStyles}>
      <Logo url="/trailhead.png" style={trailheadLogoStyles} />
      <div style={menuAndButtonStyles}>
        <SecondMenu style={secondMenuStyles} />
        <Button name="Sign Up" style={signUpButtonStyle} />
      </div>
    </div>
  );
}

const trailheadSectionStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "10px",
};

const trailheadLogoStyles = {
  height: "30px",
};

const secondMenuStyles = {
  display: "flex",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  color: "#333",
  gap: "20px",
};

const menuAndButtonStyles = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flex: 1, // Añadido para ocupar todo el espacio disponible
};

const signUpButtonStyle = {
  backgroundColor: "#0070d2",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "auto",
};
