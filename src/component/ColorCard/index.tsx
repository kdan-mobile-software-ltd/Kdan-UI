import React from 'react';
import hexRgb from 'hex-rgb';

import { Wrapper, Color, Intro, Group, Subtitle, Content } from './styled';

type Props = {
  name: string;
  hex: string;
};

const index: React.FC<Props> = ({ name, hex }: Props) => {
  const rgbaArr = hexRgb(hex, { format: 'array' });

  return (
    <Wrapper>
      <Color hex={hex} />
      <Intro>
        <Group>
          <Subtitle>NAME</Subtitle>
          <Content>{name}</Content>
        </Group>
        <Group>&nbsp;</Group>
        <Group>
          <Subtitle>HEX</Subtitle>
          <Content>{hex}</Content>
        </Group>
        <Group>
          <Subtitle>RGB</Subtitle>
          <Content>{`${rgbaArr[0]}, ${rgbaArr[1]}, ${rgbaArr[2]}`}</Content>
        </Group>
      </Intro>
    </Wrapper>
  );
};

export default index;
