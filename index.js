#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import gradient from "gradient-string";

const text1 = figlet.textSync("Hi, ", {
  font: "Standard",
  verticalLayout: "default",
  horizontalLayout: "full",
  width: 150,
  whitespaceBreak: true,
});


const text2 = figlet.textSync("I'm Souvik", {
  font: "Standard",
  verticalLayout: "default",
  horizontalLayout: "full",
  width: 150,
  whitespaceBreak: true,
});


console.log(`
  ${gradient(["cyan", "magenta"])("")}`);

const gradientText1 = gradient(["cyan", "blue", "magenta"])(text1);
console.log(gradientText1);
const gradientText2 = gradient(["cyan", "blue", "magenta"])(text2);
console.log(gradientText2);

console.log(
  chalk.cyanBright.bold(`
  ✔ Loading Souvik's details ...
  `)
);

const personelDetails = ` ${chalk.bold.whiteBright(
  "Name")}             -         ${chalk.yellowBright("Souvik Kumar Pramanik")}
 ${chalk.bold.white("Status")}           -         ${chalk.yellowBright("Student")}
 ${chalk.bold.whiteBright("Github")}           -         ${chalk.yellowBright("https://github.com/souvikpramanikgit")}
 ${chalk.bold.whiteBright("Portfolio")}        -         ${chalk.yellowBright(
"https://souviktop.netlify.app/"
)}`;

console.log(
  boxen(personelDetails, {
    padding: 1,
    margintop: 1,
    borderStyle: "none",
    backgroundColor: "#1e1e2f",
    titleAlignment: "center",
  })
);

const skillText = figlet.textSync("SKILLS", {
  font: "Small",
  horizontalLayout: "fitted",
  width: "100",
});
const gradSkilltext = gradient(["#a8ff78", "#78ffd6"])(skillText);

console.log(` \n${gradSkilltext}`);

const skillsDetails = ` ${chalk.bold.whiteBright(
  "Languages"
)}        -         ${chalk.yellowBright(
  "Java, C++, Python, Javascript"
)}
 ${chalk.bold.whiteBright("Frameworks")}       -         ${chalk.yellowBright(
  "React, SpringBoot "
)}
 ${chalk.bold.whiteBright("Technologies")}     -         ${chalk.yellowBright(
  "Express, Nodejs"
)}
 ${chalk.bold.whiteBright("Databases")}        -         ${chalk.yellowBright(
  "MongoDb, MySQL"
)}
 ${chalk.bold.whiteBright("Others")}           -         ${chalk.yellowBright(
  "Git, GitHub"
)}`;

console.log(
  boxen(skillsDetails, {
    padding: 1,
    margin: 0,
    borderStyle: "none",
    backgroundColor: "#1e1e2f",
    titleAlignment: "center",
  })
);

const msgTxt = figlet.textSync("MESSAGE", {
  font: "Small",
  width: "100",
  horizontalLayout: "fitted",
});
const gradMsgtxt = gradient(["#005AA7", "#FFFDE4"])(msgTxt);
console.log(`\n${gradMsgtxt}`);

const lastTxt = chalk.whiteBright(
  `Souvik is open for opportunities, ready to bring value to
your team and take things to the next level. Thanks for
checking out my CLI!`
);
console.log(
  boxen(lastTxt, {
    padding: 1,
    margin: 0,
    borderStyle: "none",
    backgroundColor: "#1e1e2f",
    titleAlignment: "center",
  })
);
console.log(`
  ${gradient(["cyan", "magenta"])("")}`);
