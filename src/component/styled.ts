import styled from 'styled-components';

import colors from '../themes/colors';
import font from '../themes/fonts';

export const InputLabel = styled.label`
  font-size: 14px;
  font-family: ${font.typography};
  font-weight: 500;
  margin-bottom: 6px;
  display: inherit;

  color: ${({ error }: { error: boolean }) => (error ? colors.error : colors.N100)};
`;

export const HelpText = styled.span<{ error: boolean }>`
  font-size: 12px;
  color: ${({ error }) => (error ? colors.error : colors.N40)};
`;

export const Required = styled.span`
  margin-left: 4px;
  color: ${colors.brand};
  font-size: 14px;
`;
