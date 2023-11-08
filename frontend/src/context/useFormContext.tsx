import { useContext } from 'react';
import { FormContext } from './index'; 

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (context === undefined) throw new Error("Erro aí hem");

  return context;
};