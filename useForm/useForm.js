import { useState } from "react";


export const useForm = ( initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      //propiedad computada del objeto
      [name]: value,
    });
  };


  const handleResetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState, 
    formState,
    handleChange,
    handleResetForm
  }
}
