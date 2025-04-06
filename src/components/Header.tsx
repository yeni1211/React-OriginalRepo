import { Button } from "./Button";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { SecondMenu } from "./SecondMenu";

export function Header() {
  return (
    <div style={headerStyles}>
      <div style={topBarStyles}>
        <div style={logoContainerStyles}>
          <Logo url="/vite.svg" />
          <Menu />
        </div>
        <div style={searchAndLoginStyles}>
          <Search />
        </div>
        <div style={loginButtonStyles}>
          <Icon url="/phone.svg" />
          <Icon url="/login.svg" />
        </div>
      </div>
      <div style={trailheadSectionStyles}>
        <Logo url="/trailhead.png" style={trailheadLogoStyles} />
        <div style={menuAndButtonStyles}>
          <SecondMenu style={secondMenuStyles} />
          <Button name="Sign Up" style={signUpButtonStyle} />
        </div>
      </div>
    </div>
  );
}

const headerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  padding: "10px 20px",
  backgroundColor: "white",
  borderBottom: "1px solid #ddd",
};

const topBarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const searchAndLoginStyles = {
  display: "flex",
  alignItems: "center",
};

const loginButtonStyles = {
  display: "flex",
  padding: "8px 16px",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  gap: "20px",
};

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
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  color: '#333',
  gap: '20px',
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
  padding: "8px 16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "auto",
};