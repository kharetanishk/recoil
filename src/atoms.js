import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkatom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsatom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationatom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageatom",
  default: 0,
});
