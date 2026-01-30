const fs = require("fs");
const path = require("path");

// Paths
const baseDir = __dirname;
const filePath = path.join(baseDir, "demo.txt");
const renamedPath = path.join(baseDir, "renamedDemo.txt");
const movedPath = path.join(baseDir, "movedDemo.txt");

/* 1. CREATE FILE */
fs.writeFileSync(filePath, "File created successfully\n");
console.log("✅ File created");

/* 2. WRITE (OVERWRITE FILE) */
fs.writeFileSync(filePath, "This is written data\n");
console.log("✅ File written");

/* 3. APPEND TO FILE */
fs.appendFileSync(filePath, "This data is appended\n");
console.log("✅ Data appended");

/* 4. READ FILE */
const data = fs.readFileSync(filePath, "utf8");
console.log("📄 File content:\n" + data);

/* 5. RENAME FILE */
fs.renameSync(filePath, renamedPath);
console.log("✅ File renamed");

/* 6. MOVE FILE (rename with new path) */
fs.renameSync(renamedPath, movedPath);
console.log("✅ File moved");

/* 7. CHANGE FILE PERMISSION */
fs.chmodSync(movedPath, 0o444); // read-only
console.log("✅ File permission changed to READ ONLY");

/* 8. DELETE FILE */
// fs.unlinkSync(movedPath);
// console.log("✅ File deleted");
