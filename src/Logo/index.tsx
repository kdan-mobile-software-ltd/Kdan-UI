import React from "react";

import { Wrapper } from "./styled";
import { ReactComponent as Lockup } from "../assets/images/kdan-logo.svg";
import { ReactComponent as LogoMark } from "../assets/images/kdan-logo-01.svg";
import { ReactComponent as Word } from "../assets/images/kdan-logo-02.svg";
import { ReactComponent as KCLockup } from "../assets/images/kdan-cloud-logo.svg";
import { ReactComponent as KCLogo } from "../assets/images/kdan-cloud-logo-01.svg";

export type LogoProps = {
  variant: "logomark" | "wordmark" | "combine" | "kc-logomark" | "kc-combine";
  href?: string;
};

const Logo: React.FC<LogoProps> = ({
  variant = "combine",
  href,
}: LogoProps) => {
  const setComponent = () => {
    if (variant === "logomark") {
      return <LogoMark />;
    } else if (variant === "wordmark") {
      return <Word />;
    } else if (variant === "combine") {
      return <Lockup />;
    } else if (variant === "kc-logomark") {
      return <KCLogo />;
    } else {
      return <KCLockup />;
    }
  };

  return <Wrapper href={href}>{setComponent()}</Wrapper>;
};

export default Logo;
