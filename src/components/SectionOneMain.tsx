import { Button } from "./Button";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { Tittle } from "./Tittle";

export function SectionOneMain() {
  return (
    <div style={ContainerMain}>
      <div style={logoStyles}>
        <Logo url="/trailheadlogo.svg" />
      </div>
      <div style={tittleStyles}>
        <Tittle name="Skill up for the Agentforce era with Trailhead" />
      </div>
      <div style={descriptionStyles}>
        <Description name="Learn in-demand skills for free to drive your company and career forward. Anyone can get hands-on experience building intuitive AI agents that handle everyday tasks, enhance the customer experience, and create business impact. Be an Agentblazer and transform how work gets done." />
      </div>
      <div style={buttons}>
        <Button name="Sign Up" style={signUpButtonStyle} />
        <Button name="Login" style={loginButtonStyle} />
      </div>
    </div>
  );
}

const ContainerMain = {
  width: "250 px",
};

const logoStyles = {
  width: "50px",
  height: "50px",
  marginLeft: "300px",
  marginTop: "50px",
  marginBottom: "20px",
};

const tittleStyles = {
  Width: "100%",
  marginBottom: "30px",
};

const descriptionStyles = {
  marginBottom: "40px",
};

const buttons = {
  marginLeft: "300px",
};

const signUpButtonStyle = {
  backgroundColor: "#0070d2",
  color: "white",
  padding: "14px 24px",
  fontFamily: "Arial, sans-serif",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "20px",
};

const loginButtonStyle = {
  backgroundColor: "white",
  color: "#0070d2",
  fontFamily: "Arial, sans-serif",
  padding: "12px 24px",
  border: "2px solid #0070d2",
  fontWeight: "bold",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "auto",
};
