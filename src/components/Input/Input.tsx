import React from 'react';
import * as SC from './Input.styled';

interface IProps {
  setInput: (value: any) => void;
}

export const InputField: React.FC<IProps> = ({ setInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <SC.InputTitle>Amount</SC.InputTitle>
      <SC.Input
        type="text"
        placeholder="Enter the amount"
        onChange={handleChange}
      />
    </div>
  );
};
