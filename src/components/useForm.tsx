import { ChangeEvent, useState } from "react";

export const UseForm = () => {
  type FormState = {
    name: string;
  };

  const [formState, setformState] = useState<FormState>({
    name: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return { handleSubmit, handleChange, formState };
};
