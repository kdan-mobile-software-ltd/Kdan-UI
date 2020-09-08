import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../themes';

const styleType = {
  middle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `
};

export const Container = styled.div`
  background: #ecf0f1;

  ${(props) => styleType[props.styleType]};
`;

export const ContentStyle = styled.div`
  width: 60%;
  background: ${colors.white};
  padding: 2rem 1.5rem;
`;

Container.defaultProps = {
  styleType: 'middle'
};

Container.propTypes = {
  styleType: PropTypes.oneOf(['middle'])
};
