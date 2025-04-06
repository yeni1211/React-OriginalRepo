import { Main } from "./Main";
import { SectionOneHeader } from "./SectionOneHeader";
import { SectionTwoHeader } from "./SectionTwoHeader";

export function Header() {
  return (
    <div style={headerStyles}>
      <SectionOneHeader />
      <SectionTwoHeader />
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
