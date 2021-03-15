import React, { useState, useEffect, useRef } from "react";

import ClickAwayListener from "../ClickAwayListener";
import Portal from "../Portal";
import Position from "../component/Position";
import { delay } from "../helpers/utility";

import { Wrapper, TriggerWrapper, Outer, DropdownWrapper } from "./styled";

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
  fullWidth = false,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    await delay(10);
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
      <TriggerWrapper ref={targetRef} onClick={!open ? handleClick : undefined}>
        {typeof trigger === "function" ? trigger(open) : trigger}
      </TriggerWrapper>

      <Portal>
        <Position position={position} target={targetRef} forceUpdate={open}>
          {(ref, positionStyle) => (
            <ClickAwayListener onClick={open ? handleBlur : undefined}>
              <DropdownWrapper
                ref={ref}
                open={open}
                style={{
                  height: open ? `${outerRef.current?.clientHeight}px` : 0,
                  opacity: open ? 1 : 0,
                }}
                fullWidth={fullWidth}
                {...positionStyle}>
                <Outer ref={outerRef}>{children}</Outer>
              </DropdownWrapper>
            </ClickAwayListener>
          )}
        </Position>
      </Portal>
    </Wrapper>
  );
};

export default Dropdown;
