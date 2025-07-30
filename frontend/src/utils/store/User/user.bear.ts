import { create } from "zustand";
import { userInitValues, UserType } from "@/@types/user";

type UserActions = {
  setUserData: (userData: UserType) => void;
};

type UserStore = typeof userInitValues & UserActions;

const useUserStore = create<UserStore>((set) => ({
  ...userInitValues,
  setUserData: (userData: UserType) => set(userData),
}));

export default useUserStore;
