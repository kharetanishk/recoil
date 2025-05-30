import { atom, atomFamily, selector } from "recoil";
import { Todos } from "./data";

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

export const totalpopupselector = selector({
  key: "totalnotificationselector",
  get: ({ get }) => {
    const networkcount = get(networkAtom);
    const jobcount = get(jobsAtom);
    const notificationcount = get(notificationAtom);
    const messagecount = get(messageAtom);

    return networkcount + jobcount + notificationcount + messagecount;
  },
});

export const todoFamily = atomFamily({
  key: "todofamily",
  default: (id) => {
    return Todos.find((x) => x.id === id);
  },
});
