import { atom } from "recoil";

export const leftInput = atom<string>({
  key: "leftInput",
  default: "",
});

export const rightInput = atom<string>({
  key: "rightInput",
  default: "",
});

export const scoreLeftState = atom<number>({
  key: "scoreLeftState",
  default: 0,
});
export const scoreRightState = atom<number>({
  key: "scoreRightState",
  default: 0,
});
// const [scoreLeft, setScoreLeft] = useState(0);
export const totalBreaksLeftState = atom<number>({
  key: "totalBreaksLeftState",
  default: 0,
});
export const totalBreaksRightState = atom<number>({
  key: "totalBreaksRightState",
  default: 0,
});

export const dryBreakCountLeftState = atom<number>({
  key: "dryBreakCountLeftState",
  default: 0,
});
export const dryBreakCountRightState = atom<number>({
  key: "dryBreakCountRightState",
  default: 0,
});
