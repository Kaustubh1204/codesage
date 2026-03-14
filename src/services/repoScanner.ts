import fs from "fs"
import path from "path"

export function scanRepo(repoPath: string) {

 const files: string[] = []

 function scan(dir: string){

  const items = fs.readdirSync(dir)

  for(const item of items){

   const fullPath = path.join(dir,item)

   const stat = fs.statSync(fullPath)

   if(stat.isDirectory()){

    if(item === "node_modules" || item === ".git") continue

    scan(fullPath)

   } else {

    files.push(fullPath)

   }

  }

 }

 scan(repoPath)

 return files
}
