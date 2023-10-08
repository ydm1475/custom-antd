const readline = require("readline");
const fs = require("fs");
const path = require("path");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var packagePath = path.join(process.cwd(), "./package.json");
let fileContent = fs.readFileSync(packagePath, { encoding: "utf8" });

rl.question(
  "请输入你要发布的版本号（please input your version） ",
  (version) => {
    if (!version) {
      rl.close();
      return;
    }
    fileContent = fileContent.replace(
      /"version":\s*"(.*)"/,
      `"version": "${version}"`
    );
    fs.writeFileSync(packagePath, fileContent);
    rl.close();
  }
);
