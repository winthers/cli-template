#!/usr/bin/env node


const chalk = require('chalk')
const { Command } = require('commander');
const program = new Command();


const banner = `
███▄    █  ▄▄▄       ███▄ ▄███▓▓█████    
██ ▀█   █ ▒████▄    ▓██▒▀█▀ ██▒▓█   ▀    
▓██  ▀█ ██▒▒██  ▀█▄  ▓██    ▓██░▒███      
▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██    ▒██ ▒▓█  ▄    
▒██░   ▓██░ ▓█   ▓██▒▒██▒   ░██▒░▒████▒   
░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░░ ▒░ ░   
░ ░░   ░ ▒░  ▒   ▒▒ ░░  ░      ░ ░ ░  ░   
  ░   ░ ░   ░   ▒   ░      ░      ░      
        ░       ░  ░       ░      ░  ░   
                                         
`


program
  .name('string-util')
  .description(chalk.red(banner))
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {



    console.log(str, options)
  });

program.parse();