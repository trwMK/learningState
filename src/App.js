import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <span>🙆</span>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <span>😏</span>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

/*We can only call hooks (like useState) on top level functions
  Not inside an if statement or inside another function or a loop. Use const for state and useState.
  And never update the state manually*/

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Mike" });

  //Define functions for the Events directly in the component
  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
      //setStep((curStep) => curStep + 1);
      //console.log(step);

      //BAD PRACTICE!!!!!!!!!!
      //test.name = "Jonny";
      //setTest({ name: "Johnny" });
    }
  }

  //if I would set the state from step to 1 after clicking on the x
  function handleButtonClick() {
    setIsOpen(!isOpen);
    setStep(1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((tglIsOpen) => !tglIsOpen)}
      >
        {isOpen ? "x" : "🪄"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#fff"
                bgColor="#000"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

//With CHILDREN PROP (Reserved prop from React!!!) For reusable components
//Children prop is like a hole that can be filled in to really customize the components and reuse the components
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      <p>{children}</p>
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
