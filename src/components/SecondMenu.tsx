import { Label } from "./Label";

export function SecondMenu(props: { style?: React.CSSProperties }) {
    return <div style={props.style}>
        <Label name="Home" hoverStyle={labelHoverStyles}/>
        <Label name="Learn" hoverStyle={labelHoverStyles}/>
        <Label name="Community" hoverStyle={labelHoverStyles}/>
        <Label name="Career Growth" hoverStyle={labelHoverStyles}/>
        <Label name="Credentials" hoverStyle={labelHoverStyles}/>
        <Label name="Help" hoverStyle={labelHoverStyles}/>
    </div>
}



const labelHoverStyles: React.CSSProperties = {
  color: "#5BA3F0",
  fontWeight: "bold",
};