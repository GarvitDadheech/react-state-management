import { RecoilRoot, useRecoilValue } from "recoil"
import { todosAtomFamily } from "./atoms"
import Recoil from "../Recoil";

function Todos() {
    return (
        <RecoilRoot>
            <div>
                <Todo id={1}/>
                <Todo id={2}/>
                <Todo id={3}/>
                <Todo id={3}/>
            </div>
        </RecoilRoot>
    )
}

function Todo({id}) {
    const singletodo = useRecoilValue(todosAtomFamily(id));
    
    return (
        <div>
            <h1>{singletodo.title}</h1>
            <h2>{singletodo.description}</h2>
        </div>
    )
}


export default Todos