import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Component: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Component;
