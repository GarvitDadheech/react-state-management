import { atom, selector,atomFamily, selectorFamily } from "recoil";
import { todoList } from "./todoList";
import axios from "axios";

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

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(todoList.find(x => x.id === id));
            }, 5000);
        });
    }
})

export const todosAtomFamilyWithFetch = atomFamily({
    key: "todosAtomFamilyWithFetch",
    default: selectorFamily({
        key: "todosAtomFamSelectorwithFetch",
        get: (id) => async ({get}) => {
            //hit the backend api here
            const backendapi = ""
            const res = await axios.get(backendapi`${id}`);
            return res.data;
        }
    })
})