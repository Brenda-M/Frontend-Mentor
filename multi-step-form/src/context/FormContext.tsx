import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type FormContextProps = {
  children: ReactNode;
};

interface FormData {
  name: string;
  email: string;
}

interface FormContextValue {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export const FormContext = createContext<FormContextValue | undefined>(undefined);

export const FormProvider: React.FC<FormContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const value: FormContextValue = {
    formData,
    setFormData,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};
