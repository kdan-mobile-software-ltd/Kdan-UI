import React from "react";

import { Wrapper } from "./styled";
import { ReactComponent as Lockup } from "../assest/images/img-kdan-logo.svg";
import { ReactComponent as Logo } from "../assest/images/img-kdan-logo-01.svg";
import { ReactComponent as Word } from "../assest/images/img-kdan-logo-02.svg";

export type LogoProps = {
  variant: "logomark" | "wordmark" | "combine";
};

const index: React.FC<LogoProps> = ({ variant = "combine" }: LogoProps) => {
  const setComponent = () => {
    if (variant === "logomark") {
      return <Logo />;
    } else if (variant === "wordmark") {
      return <Word />;
    } else {
      return <Lockup />;
    }
  };

  return <Wrapper>{setComponent()}</Wrapper>;
};

export default index;
