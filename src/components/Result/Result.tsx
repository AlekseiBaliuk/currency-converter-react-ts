import React from 'react';
import * as SC from './Result.styled';

interface IProps {
  input: number,
  from: string,
  to: string,
  output: number,
}

export const Result: React.FC<IProps> = ({ input, from, to, output }) => {
  return (
    <SC.Wrapper>
      <h2>Converted Amount:</h2>
      <SC.Output>
        {input + ' ' + from + ' = ' + output.toFixed(2) + ' ' + to}
      </SC.Output>
    </SC.Wrapper>
  );
};
