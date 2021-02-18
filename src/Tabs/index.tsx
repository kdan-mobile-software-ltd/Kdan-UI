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
  label: React.ReactNode;
  content: React.ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
  onChange?: (index: number) => void;
  defaultIndex?: number;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  onChange,
  defaultIndex = 0,
}: TabsProps) => {
  const [selected, onSelect] = useState(0);

  const handleClick = (index: number) => {
    onSelect(index);

    if (onChange) {
      onChange(index);
    }
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
              key={`label_${index}`}
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
          <Panel key={`panel_${index}`} isActive={selected === index}>
            {tab.content}
          </Panel>
        ))}
      </PanelGroup>
    </Wrapper>
  );
};

export default Tabs;
