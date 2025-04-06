import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Search } from "./Search";

export function SectionOneHeader() {
    return <div style={topBarStyles}>
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
}

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