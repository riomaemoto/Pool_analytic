import { atom } from "recoil";

export const leftInput = atom<string>({
  key: "leftInput",
  default: "",
});

export const rightInput = atom<string>({
  key: "rightInput",
  default: "",
});
