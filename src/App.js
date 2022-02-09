import React from "react";
import Stepper from "react-stepper-horizontal";
import "./styles.css";

/**
 * https://stackoverflow.com/questions/65866027/how-to-make-a-stepper-clickable
 */

const tick = `√`;
const steps = [...Array(10).keys()].map(() => ({ title: tick }));

const Wrapper = ({ children, id }) => <div id={id}>{children}</div>;

class Breadcrumb extends React.Component {
  render() {
    const { step, steps, theme } = this.props;
    return (
      <Wrapper id="Breadcrumb">
        <Stepper
          steps={steps}
          activeStep={step}
          activeColor={theme.breadcrumb.activeColor}
          activeBorderStyle="solid"
          activeBorderColor={theme.breadcrumb.activeBorderColor}
          completeBorderStyle="solid"
        />
      </Wrapper>
    );
  }
}

export default function App() {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Breadcrumb
        onStepClick={setActiveStep}
        step={activeStep}
        steps={steps.map((step, index) => ({
          ...step,
          onClick: (event) => {
            console.log("clicked", index);
            step.onClick?.(event);
            setActiveStep(index);
          }
        }))}
        theme={{
          breadcrumb: {
            activeColor: "red",
            activeBorderColor: "blue"
          }
        }}
      />

      <button type="button" onClick={() => setActiveStep((i) => i + 1)}>
        Next
      </button>
    </div>
  );
}
