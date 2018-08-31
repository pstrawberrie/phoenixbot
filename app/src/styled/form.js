import styled from 'styled-components';
import {color, font} from './helpers';

// Form Wrapper
const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.full { width: 100%; }
    &.half { width: 48%; }
  }
`;

const FormTextInput = styled.input`
  box-sizing: border-box;
  padding: .55rem 1rem;
  font-size: 1.1rem;
  background: ${color.whiteTransparent};
  color: ${color.dark};
`;

export {
  FormWrapper,
  FormTextInput
};