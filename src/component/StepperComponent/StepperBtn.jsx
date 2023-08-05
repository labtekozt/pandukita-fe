import React, { useEffect, useRef, useState } from "react";
import { Button } from "@kiwicom/orbit-components/lib/";

const StepperBtn = ({ handleClick, currentStep, steps, handleSubmit }) => {
  return (
    <div className="flex flex-row">
      {currentStep !== steps.length - 1 && (
        <Button
          onClick={() => handleClick("prev")}
          circled={true}
          fullWidth="true"
          submit={false}
          centered={true}
        >
          Kembali
        </Button>
      )}
      <Button
        onClick={(e) => {
          if (currentStep == steps.length - 1) {
            handleClick("next");
          } else {
            handleSubmit(e);
          }
        }}
        circled={true}
        fullWidth="true"
        submit={false}
        centered={true}
      >
        {currentStep == steps.length - 1 ? "Lanjut" : "Submit"}
      </Button>
    </div>
  );
};

export default StepperBtn;
