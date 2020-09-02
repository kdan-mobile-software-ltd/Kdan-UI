import styled, { css } from 'styled-components';

export const BarWrapper = styled.div`
  position: relative;
  display: block;
  margin: 15px auto 0;
  user-select: none;
  font-size: 0.8125rem;
`;

const BlockStyle = ({ isItem }) => {
  if (isItem) {
    return css`
      &:first-child {
        border-radius: 4px 4px 0 0;
      }
      &:last-child {
        border-radius: 0 0 4px 4px;
      }
      &:only-child {
        border-radius: 4px;
      }
      &:hover {
        background-color: #e6e6e6;
      }
    `;
  } else {
    return css`
      border-radius: 4px;
    `;
  }
}

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  padding: 5px 10px;
  margin: auto;
  font-size: 14px;
  color: rgb(64, 64, 64);
  background-color: #fff;
  cursor: pointer;

  ${BlockStyle};
`;

export const BarIcon = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000;
  margin: auto 0;
`;

export const Menu = styled.div`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  bottom: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;
