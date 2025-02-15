export function getUserDetails(){
    let data = JSON.parse(localStorage.getItem("user"))
    if(data){
        return data;
    }else{
        return false;
    }
}