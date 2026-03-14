import { simpleGit } from "simple-git"
import path from "path"

export async function cloneRepo(url:string){

 const git = simpleGit()

 const repoName = url.split("/").pop()?.replace(".git","")

 const repoPath = path.join("repos",repoName!)

 await git.clone(url,repoPath)

 return repoPath
}