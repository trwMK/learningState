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
      <Steps />
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

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/*test.name*/}
          </p>

          <div className="buttons">
            {/* Instead of EventListener (buton.addEventListener(click, ())), we use onClick directly on the button in JSX (React)
        The are no function calls, but really function -> thats why we have to have another callback function instead of simply write alert(...)
        And only pass the function value and do not call the function () (handlenext not handlenext()) otherwise the functions get executed right away*/}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
