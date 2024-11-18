#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

const generateText = (text, font) => {
  return new Promise((resolve, reject) => {
    figlet.text(text, {
      font: font,
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }, (err, data) => {
      if (err) {
        reject('Something went wrong...');
      }
      resolve(data);
    });
  });
};

(async () => {
  try {
    const hiThere = await generateText('HI THERE!!', 'ANSI Shadow');
    const personalDetails = await generateText('PERSONAL DETAILS', 'ANSI Shadow');
    const skills = await generateText('SKILLS', 'ANSI Shadow');
    const message = await generateText('MESSAGE', 'ANSI Shadow');

    console.log(chalk.magenta(hiThere));

    console.log(chalk.green('✔ Loading Souvik\'s details\n'));

    console.log(chalk.yellow.bold(personalDetails));
    console.log(`${chalk.cyan.bold('NAME')}    - Souvik Kumar Pramanik`);
    console.log(`${chalk.cyan.bold('STATUS')}  - Student`);
    console.log(`${chalk.cyan.bold('GITHUB')}  - btw its awesome -> (https://github.com/souvikpramanikgit)`);
    console.log(`${chalk.cyan.bold('WEBSITE')} - Coolest thing -> (https://souviks.netlify.app/)\n`);

    console.log(chalk.yellow.bold(skills));
    console.log(`${chalk.green.bold('LANGUAGES')}   - Java, C++, JavaScript`);
    console.log(`${chalk.green.bold('FRAMEWORKS')}  - React`);
    console.log(`${chalk.green.bold('TECHNOLOGIES')} - Express, Nodejs`);
    console.log(`${chalk.green.bold('DATABASES')}   - MongoDB,  SQL`);
    // console.log(`${chalk.green.bold('DEVOPS')}      - Docker, Kubernetes, Github Actions, AWS, AZURE`);
    console.log(`${chalk.green.bold('TOOLS')}       - GIT, Github\n`);

    // console.log(chalk.yellow.bold(message));
    // console.log('Souvik is up for hire, ready to help your company get to next heights and ofc Thanks for checking out my cli!');
  } catch (err) {
    console.error(chalk.red(err));
  }
})();
