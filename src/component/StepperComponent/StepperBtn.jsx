import React, { useEffect, useRef, useState } from "react";
import { Button } from "@kiwicom/orbit-components/lib/";

const StepperBtn = ({handleClick,currentStep,steps}) => {

  return (
    <div>
        <Button 
          onClick={() => handleClick("next")}
          circled={true} fullWidth="true" submit={false} centered={true}>
          {currentStep == steps.length -1 ? "Lanjut" : "Submit"}
        </Button>
    </div>
  );
};

export default StepperBtn;
