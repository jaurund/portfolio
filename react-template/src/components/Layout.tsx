import { ReactNode } from "react";
import { Terminal } from "./terminal/Terminal";
import { TerminalProvider } from "@/contexts/TerminalContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <TerminalProvider>
      <Terminal>{children}</Terminal>
    </TerminalProvider>
  );
};
