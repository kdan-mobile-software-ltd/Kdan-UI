import React, { useState, useEffect, useRef } from "react";

import Portal from "../Portal";
import ClickAwayListener from "../ClickAwayListener";
import Position from "../component/Position";

import { Wrapper, TriggerWrapper, DropdownWrapper } from "./styled";

export type DropdownProps = {
  defaultOpen?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: "bottom left" | "bottom center" | "bottom right";
  fullWidth?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  defaultOpen = false,
  trigger,
  children,
  position = "bottom left",
  fullWidth,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen((current) => !current);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <TriggerWrapper ref={targetRef} onClick={handleClick}>
        {typeof trigger === "function" ? trigger(open) : trigger}
      </TriggerWrapper>
      {open && (
        <Portal>
          <Position position={position} target={targetRef}>
            {(ref, positionStyle) => (
              <ClickAwayListener onClick={handleBlur}>
                <DropdownWrapper
                  ref={ref}
                  fullWidth={!!fullWidth}
                  {...positionStyle}>
                  {children}
                </DropdownWrapper>
              </ClickAwayListener>
            )}
          </Position>
        </Portal>
      )}
    </Wrapper>
  );
};

export default Dropdown;
