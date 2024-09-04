import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, myNetworkAtom, notificationAtom } from "./atoms";
import { allnotificationSelector } from "./selectors";

function Navbar() {
    return(
        <RecoilRoot>
            <NavigationButtons/>
        </RecoilRoot>
    )
}

function NavigationButtons() {
    const networkCount = useRecoilValue(myNetworkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const messagingCount = useRecoilValue(messagingAtom);
    const [notificationCount,setnotificationCount] = useRecoilState(notificationAtom);
    const allnotificationCount = useRecoilValue(allnotificationSelector);
    function notificationClickHandler() {
        setnotificationCount(c => c+1);
    }

    return (
        <div>
            <button>Home</button>
            <button>MyNetwork ({networkCount})</button>
            <button>Jobs ({jobsCount})</button>
            <button>Messaging ({messagingCount})</button>
            <button onClick={notificationClickHandler}>Notifications ({notificationCount})</button>
            <button>Me</button>
            <div>Sum of all notifications is {allnotificationCount}</div>
        </div>
    )
}
export default Navbar;