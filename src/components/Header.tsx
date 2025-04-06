import { SectionOneHeader } from "./SectionOneHeader";
import { SectionTwoHeader } from "./SectionTwoHeader";

export function Header() {
  return (
    <div className="flex flex-col items-stretch p-4 bg-white border-b border-gray-300">
      <SectionOneHeader />
      <SectionTwoHeader />
    </div>
  );
}
// const headerStyles = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "stretch",
//   padding: "10px 20px",
//   backgroundColor: "white",
//   borderBottom: "1px solid #ddd",
// };