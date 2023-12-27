import React, { useState } from 'react';
import { Button } from 'antd';
import PersonalInfo from './components/PersonalInfo';
import ThankYou from './components/ThankYou';
import Plan from './components/Plan';
import Addons from './components/Addons';
import Summary from './components/Summary';
import Layout from './components/Layout';
import { FormProvider } from './context/FormContext';

const steps = [
  PersonalInfo,
  Plan,
  Addons,
  Summary,
  ThankYou,
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <FormProvider>
      <Layout currentStep={currentStep} onChangeStep={setCurrentStep}>
        {React.createElement(steps[currentStep])}
        <div className='flex justify-between'>
          {currentStep > 0 && currentStep < steps.length - 1 && (
            <Button type="primary" onClick={prevStep}>
              Go Back
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={nextStep}>
              {currentStep === steps.length - 2 ? 'Finish' : 'Next Step'}
            </Button>
          )}
        </div>
      </Layout>
    </FormProvider>
  );
}

export default App;

