import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const styleType = {
  middle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `
}

export const Container = styled.div`
  background: #ecf0f1;

  ${(props) => styleType[props.styleType]};
`;

Container.defaultProps = {
  styleType: 'middle'
}

Container.propTypes = {
  styleType: PropTypes.oneOf(['middle']),
}
