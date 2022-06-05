import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const plans = [
  {
    id: 0,
    name: "Basic",
  },
  { id: 1, name: "Standart" },
  { id: 2, name: "Premium" },
];

export default function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [step2Check, setStep2Check] = useState(-1);

  //function next step
  const Step = () => {
    setStep(step + 1);
  };

  // step 2 chek for plan
  const checkPlans = () => {
    if (step2Check === -1) {
      alert("Please choose any plans");
    } else  {
      setStep(step + 1);
    }
  };

  // 4 companent step
  const Steps = () => {
    if (step === 1) {
      return (
        <Step1
          onClick={() => {
            Step();
          }}
        />
      );
    } else if (step === 2) {
      return (
        <Step2 onClick={() => { checkPlans() }} plans={plans} step={step2Check} setState={setStep2Check}/>
      );
    } else if (step === 3) {
      return (
        <Step3
          onClick={() => {
            Step();
          }}
          setName={setName}
        />
      );
    } else if (step === 4) {
      return <Step4 name={name} planName={plans[step2Check].name} />;
    }
  };

  return <div>{Steps()}</div>;
}
