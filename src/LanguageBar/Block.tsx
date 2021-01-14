import React from "react";

import { BlockWrapper, Arrow } from "./styled";

type Props = {
  value: React.ReactNode;
  isItem?: boolean;
  onChange?: () => void;
  isOpen?: boolean;
  theme?: string;
};

const Block: React.FC<Props> = ({
  value,
  isItem = false,
  onChange = () => {
    // do something
  },
  isOpen = false,
  theme,
}: Props) => {
  return (
    <BlockWrapper isItem={isItem} onClick={onChange} theme={theme}>
      {value}
      {!isItem && <Arrow isOpen={isOpen} />}
    </BlockWrapper>
  );
};

export default Block;
