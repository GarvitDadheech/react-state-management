import { atom } from "recoil";

export const myNetworkAtom = atom({
    key: "myNetworkAtom",
    default: 11
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 2
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 25
})
