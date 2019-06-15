import styled from 'styled-components';

const Input = styled.input`
  width : 100%;
  height : 2.3rem;
  border : none;
  outline : none;

  border-radius : 10px;
  font-size : 1.2rem;
  box-shadow : 0 0 5px 1px rgba(0, 0, 0, 0.3);
  background : #e9ecef;
  padding : 6px 0 6px 10px;

  &:focus {
    background : white;
  }
`;

export default Input;