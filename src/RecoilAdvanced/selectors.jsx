import { selector } from "recoil";
import { jobsAtom, messagingAtom, myNetworkAtom, notificationAtom } from "./atoms";

export const allnotificationSelector = selector({
    key: "allnotificationSelector",
    get: ({get}) => {
        return get(messagingAtom)+get(notificationAtom)+get(myNetworkAtom)+get(jobsAtom);
    }
})