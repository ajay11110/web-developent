 "use server"
 import fs from "fs/promises"

export const submitaction = async (e) => {
   console.log(e.get("name") , e.get("password") );
   let datafile = fs.writeFile("formData.txt", ` name : ${e.get("name")} and password is : ${e.get("password")} `)
   
  
}