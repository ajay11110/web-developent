import fs from "fs/promises"
import fsa from "fs"

let files = await fs.readdir("A:\\codes\\web developent\\exercise\\organise files\\files")
let basefolder = "A:\\codes\\web developent\\exercise\\organise files\\files"
let target = "A:\\codes\\web developent\\exercise\\organise files\\organised"
import path from "path"

let arr = []

if (!fsa.existsSync(target)) {
    await fs.mkdir(target, { recursive: true });
    //because it need time to make folder so need to be use callback {recursive: true}
}

for (const item of files) {
    arr.push(item)
    let ext = item.split(".").pop();
    let extfolder = path.join(target, ext)

    if (!fsa.existsSync(extfolder)) {
        await fs.mkdir(extfolder, { recursive: true })
    }

    await fs.rename(path.join(basefolder, item), path.join(target, ext, item))
}
