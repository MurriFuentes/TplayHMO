import { ToggleButton } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

export default function InnerSectionInfo({
  onChange,
  formState,
  data,
  title,
  name,
  toggleState
}) {
  return (
    <>
      <div
        className={"tab_InnerSection " + (toggleState === 2 ? "disabled" : "")}
      >
        <h2>{title}</h2>
        <div className="button_container"></div>
        <ButtonGroup>
          {data.map((infoDisplay, idx) => (
            <ToggleButton
              key={idx}
              id={`${name}-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name={name}
              value={infoDisplay.value}
              checked={formState.megasValue === infoDisplay.value}
              onChange={onChange}
            >
              {infoDisplay.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}
