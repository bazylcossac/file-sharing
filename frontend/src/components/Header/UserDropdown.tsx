"use client";
import { Dispatch, ReactElement, SetStateAction } from "react";
import Dropdown from "../Dropdown";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";
type UserDropdownType = {
  trigger: ReactElement;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  visible?: boolean;
  className?: string;
};

export default function UserDropdown({
  visible,
  setVisible,
  trigger,
  className,
}: UserDropdownType) {
  return (
    <Dropdown
      visible={visible}
      setVisible={setVisible}
      trigger={trigger}
      className={className}
    >
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem
        variant="destructive"
        className="hover:bg-red-500"
        onClick={() =>signOut}
      >
        Logout
      </DropdownMenuItem>
    </Dropdown>
  );
}
