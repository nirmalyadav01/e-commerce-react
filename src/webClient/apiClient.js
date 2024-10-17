export async function getRequest(url){
    try{
        let data = await fetch(url)
        res = await data.json()
        return res
    }catch(error){
      console.log(error);
    }
}