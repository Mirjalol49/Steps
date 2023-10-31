import { useState } from "react";

const messages = [
  "Jonas React Course",
  "Jonas Javascript Course",
  "Css for Js Devs Course",
  "Joy of React",
];

export default function App() {
  //Step
  const [step, setStep] = useState(1);
  //Previous btn
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  //Next btn
  function handleNext() {
    if (step < 4) setStep(step + 1);
  }

  //Open&& close like a modal
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Courses that i need to finish by the end of 2023
          </h1>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
          </div>

          <p className="message">
            Course {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
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
    </>
  );
}
