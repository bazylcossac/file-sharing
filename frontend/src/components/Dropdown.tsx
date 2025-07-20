import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
type DropdownTypes = {
  visible?: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  trigger?: string | ReactElement;
  separator?: boolean;
  childrenStyles?: string;
  label?: string | ReactElement;
  className?: string;
};

export default function Dropdown({
  trigger,
  label,
  children,
  visible,
  setVisible,
  separator,
  childrenStyles,
  ...props
}: DropdownTypes) {
  return (
    <DropdownMenu open={visible} onOpenChange={setVisible}>
      {!!trigger && <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>}
      <DropdownMenuContent {...props}>
        {!!label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        {separator && <DropdownMenuSeparator />}
        <div className={cn("[&>*]:cursor-pointer", childrenStyles)}>
          {children}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
