export const loadState = () =>{
    try{
        const serializedState = sessionStorage.getItem('LoginUser');
        console.log("in loadState : "+sessionStorage.getItem('LoginUser'));
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined;
    };
}

export const saveState = (state) =>{
    try{
        console.log("saveState param"); 
        console.log(state);
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('LoginUser',serializedState);
        console.log("save UserInfo success");
    }catch(err){
        console.log(err);
    }
}

export const removeState = () =>{
    if(!sessionStorage) return null;

    sessionStorage.removeItem('LoginUser');
}