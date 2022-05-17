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
        <h5 className="text-white h4">{title}</h5>
        <div className="button_container"></div>
        <ButtonGroup size="sm bg-dark h5">
          {data.map((infoDisplay, idx) => (
            <ToggleButton
              key={idx}
              id={`${name}-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name={name}
              value={infoDisplay.value}
              checked={formState[name] === infoDisplay.value}
              onChange={onChange}
              disabled={toggleState === 2}
              
            >
              {infoDisplay.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}
