import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Label,
  LabelGroup,
  LabelWrapper,
  Panel,
  PanelGroup,
} from "./styled";

type Tab = {
  label: string;
  content: React.ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
  onChange: (index: number) => void;
  defaultIndex: number;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  onChange,
  defaultIndex,
}: TabsProps) => {
  const [selected, onSelect] = useState(0);

  const handleClick = (index: number) => {
    onSelect(index);
    onChange(index);
  };

  useEffect(() => {
    onSelect(defaultIndex);
  }, [defaultIndex]);

  return (
    <Wrapper>
      <LabelWrapper>
        <LabelGroup>
          {tabs.map((tab, index) => (
            <Label
              key={tab.label}
              isActive={selected === index}
              onClick={() => {
                handleClick(index);
              }}>
              {tab.label}
            </Label>
          ))}
        </LabelGroup>
      </LabelWrapper>
      <PanelGroup>
        {tabs.map((tab, index) => (
          <Panel key={tab.label} isActive={selected === index}>
            {tab.content}
          </Panel>
        ))}
      </PanelGroup>
    </Wrapper>
  );
};

export default Tabs;
