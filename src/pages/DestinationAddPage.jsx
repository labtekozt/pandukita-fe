import React, { useEffect, useRef, useState } from "react";
import { TextLink, Button, InputFile } from "@kiwicom/orbit-components/lib/";
import { IconArrowNarrowLeft, IconMap2 } from "@tabler/icons-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import StepperBtn from "../component/StepperComponent/StepperBtn";
import Informasi from "../component/StepperComponent/Informasi";
import Stepper from "../component/StepperComponent/Stepper";
import Lokasi from "../component/StepperComponent/Lokasi";
import { StepperContext } from "../component/StepperComponent/StepperContext";

function DestinationAdd() {

  const [currentStep, setCurrentStep] = useState(1);
  const [dataDestination, setDataDestination] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Informasi",
    "Lokasi"
  ];

  const displayStep = (step) => {
    switch(step) {
      case 1:
        return <Informasi />
      case 2:
        return <Lokasi />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction == "next" ? newStep++ : newStep--;
    //check step
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
  <div>
    <div className="sticky top-0">
      <div className="p-2 z-50 shadow-sm bg-white">
        <div className="flex">
          <div className="grow h-6">
            <TextLink href="/">
              <IconArrowNarrowLeft color="black" />
            </TextLink>
          </div>
          <div className="grow-0 mr-8">Tambah Wisata</div>
          <div className="grow h-1"></div>
          </div>
        </div>

          {/* Stepper */}
          <div>
            <Stepper 
              steps = {steps}
              currentStep = {currentStep}/>   
          </div>
    </div>

    <div className="containerWisata mt-[-20px] pt-5">
        <form action="" required={true}>
            {/* Content */}
            
            <div>
              <StepperContext.Provider value={{
                dataDestination,
                setDataDestination,
                finalData,
                setFinalData
              }}>
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>



            {/* Button Step */}
            <div className="p-4 z-50 bottom-0 mt-[-80px]">
                <StepperBtn 
                  handleClick={handleClick}
                  currentStep={currentStep}
                  steps={steps}
                />
            </div>
        </form>
    </div>
    </div>
  );
}

export default DestinationAdd;
