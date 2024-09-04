import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil"
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
    const singletodo = useRecoilValueLoadable(todosAtomFamily(id));
    console.log(singletodo);
    if(singletodo.state=="loading"){
        return (
            <div>loading....</div>
        )
    }
    else if(singletodo.state=="hasValue"){
        return (
            <div>
                <h1>{singletodo.contents.title}</h1>
                <h2>{singletodo.contents.description}</h2>
            </div>
        )
    }
    else if(singletodo.state=="hasError") {
        return (
            <div>
                Error getting data from backend!
            </div>
        )
    }
}


export default Todos