import { atom, selector,axios } from "recoil";

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

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificSelector",
        get: async () => {
            //hit the backend api here;
            const backendapi = "";
            const res = await axios.get(backendapi);
            return res.data;
        }
    })
})
