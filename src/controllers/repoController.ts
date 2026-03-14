import {cloneRepo} from "../services/repoService.js"

export async function connectRepo(req: any,res: any){

 const {githubUrl} = req.body

 const path = await cloneRepo(githubUrl)

 res.json({
  message:"Repo cloned",
  path
 })

}