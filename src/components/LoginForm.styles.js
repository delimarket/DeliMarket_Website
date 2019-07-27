import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.primaryWhite};
  margin-top: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.primaryGrey};
  color: ${({ theme }) => theme.primaryBlack};
  border-left: none;
  border-top: none;
  border-right: none;
  outline: none;
  transition: border-bottom-color 0.3s ease-in-out, color 0.3s ease-in-out;
  width: 500px;
  display: block;

  ::placeholder {
    color: ${({ theme }) => theme.primaryGrey};
    transition: color 0.3s ease-in-out;
  }

  :focus {
    border-bottom-color: ${({ theme }) => theme.primaryBlack};

    ::placeholder {
      color: ${({ theme }) => theme.primaryBlack};
    }
  }
`;

export const SubmitButton = styled.input`
  display: block;
  outline: none;
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.primaryGrey};
  margin: 10px auto 0 auto;
  background-color: ${({ theme }) => theme.primaryWhite};
  font-size: 20px;
  transition: padding 0.3s ease-in-out, border-bottom 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    padding: ${props => (props.disabled ? '0' : '0 15px 0 15px')};
    border-bottom: solid 2px ${props => (props.disabled ? props.theme.primaryGrey : props.theme.primaryBlue)};
  }

  :active {
    color: ${({ theme }) => theme.darkGrey};
  }
`;
