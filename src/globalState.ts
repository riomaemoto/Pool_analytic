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
