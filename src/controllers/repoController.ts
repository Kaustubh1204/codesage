import { cloneRepo } from "../services/repoService.js"
import { scanRepo } from "../services/repoScanner.js"

export async function connectRepo(req:any,res:any){

 const { githubUrl } = req.body

 const repoPath = await cloneRepo(githubUrl)

 const files = scanRepo(repoPath)

 console.log(files)

 res.json({
  message:"Repo cloned",
  path: repoPath,
  files
 })

}
