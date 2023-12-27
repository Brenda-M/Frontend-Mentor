import React, { ReactNode } from 'react';
import { Steps } from 'antd';

interface LayoutProps {
  children: ReactNode;
  currentStep: number; 
  onChangeStep: (step: number) => void; 
}

const Layout: React.FC<LayoutProps> = ({ children, currentStep, onChangeStep }) => {
  const steps = [
    {
      title: 'Step 1',
      description: 'your info',
    },
    {
      title: 'Step 2',
      description: 'select plan',
    },
    {
      title: 'Step 3',
      description: 'add-ons',
    },
    {
      title: 'Step 4',
      description: 'summary',
    },
  ];

  const onStepChange = (step: number) => {
    onChangeStep(step);
  };

  return (
    <div className='flex bg-white rounded-lg p-4  '>
      <div className='sidebar rounded-lg'>
        <Steps current={currentStep} onChange={onStepChange} direction="vertical" items={steps} />
      </div>
      <div className='flex flex-col px-20'>{children}</div>
    </div>
  );
};

export default Layout;
