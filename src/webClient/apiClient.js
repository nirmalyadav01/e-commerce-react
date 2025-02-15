export async function getRequest(url){
    try{
        let data = await fetch(url)
        data = await data.json()
        return data
    }catch(error){
      console.log(error);
    }
}

export async function postRequest(url,data){
  try{
      let res = await fetch(url,{
        method : "POST",
        headers :{
          "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
      })
      res = await res.json()
      return res
  }catch(error){
    console.log(error);
  }
}