import React from 'react';
import Select from 'react-select';
import * as SC from './SelectOption.styled';

interface IOptions {
  label: string;
  value: string;
}

interface IProps {
  title: string;
  options: Array<IOptions>;
  value: string;
  setFrom: (label: string) => void;
  placeholderOption: string;
}

export const SelectOption: React.FC<IProps> = ({
  title,
  options,
  value,
  setFrom,
  placeholderOption,
}) => {
  // const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setFrom(e.label);
  // };
  return (
    <SC.Wrapper>
      <SC.SelectTitle>{title}</SC.SelectTitle>
      <Select
        options={options}
        onChange={e => setFrom(e!.label)}
        value={{ value: value, label: value }}
        placeholder={placeholderOption}
      />
    </SC.Wrapper>
  );
};
