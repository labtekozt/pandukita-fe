import React, { useEffect, useRef, useState } from "react";
import { Button } from "@kiwicom/orbit-components/lib/";
import { IconCheck } from '@tabler/icons-react';



function Stepper({steps, currentStep}) {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0;

    while(count < newSteps.length){
        // current steps
        if(count == stepNumber){
            newSteps[count] = {
                ...newSteps[count],
                highlighted : true,
                selected : true,
                completed : true,
            };
            count++;
        }
        //complete step
        else if(count < stepNumber ){
            newSteps[count] = {
                ...newSteps[count],
                highlighted : false,
                selected : true,
                completed : true,
            };
            count++;
        }
        //step pending
        else{
            newSteps[count] = {
                ...newSteps[count],
                highlighted : false,
                selected : false,
                completed : false,
            };
            count++;
        }
      }
      return newSteps;
    };

    useEffect(() => {
        //create object
        const stepsState = steps.map((step, index) => 
        Object.assign(
        {}, 
        {
            description : step,
            completed : false,
            highlighted : index == 0 ? true : false,
            selected : index == 0 ? true : false,
        })    
        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep -1, stepRef.current);
        setNewStep(current);

    }, [steps, currentStep]);

    const displaySteps = newStep.map((step, index) => {
        return (
            <div key = {index} 
            className= {index != newStep.length -1 ? "flex w-full items-center" : "flex items-center"}>
                
                {/* Step Number */}
                    <div className={`px-3 ml-1 rounded-full transition duration-500 ease-in-out border-2 border-[#00A388] h-8 w-8 flex items-center
                        justify-center py-3 ${step.selected ? "border-[#00A388] bg-[#00A388] text-[#00A388] font-bold" : ""}`}>
                        {step.completed ? (
                            <span className="text-white font-bold"><IconCheck width={20} /></span>
                        ) : (index + 1)}
                    </div>
        
                    {/* Step Deskripsi */}
                    <div className={`ml-1 text-sm ${step.highlighted ? "text-bold" : "text-[#6d6d6d]"}`}>
                        {step.description}
                    </div>
        
                    {/* Step Line */}
                    <div className={`flex-auto ml-1 border-t-2 border-[#cecece] transition duration-500 ease-in-out ${step.completed ? "border-[#cecece]" : "border-[#cecece]"}`}>
                </div>
            </div>
        );
    });

  return (
    <div>
        {/* Step Number */}
        <div className="p-3 bg-[#e2e2e2] flex items-center">
            {displaySteps}
        </div>
    </div>
  );
}

export default Stepper;
