import React from "react";

export type ExampleProps = {
  children: React.ReactNode;
  title: string;
};

const Example: React.FC<ExampleProps> = ({ children, title }: ExampleProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Example;
