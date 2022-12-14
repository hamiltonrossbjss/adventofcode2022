#!/usr/bin/env node

const fs = require('fs/promises');

async function load_input() {
  try {
    const data = await fs.readFile('day01_input.txt', { encoding: 'utf8' });
    return data
  } catch (err) {
    console.log(err);
  }
}

var elf_count = 0;
var elf_current = 0;
var elf_cals = [0];

load_input().then(allFileContents => { 
allFileContents.split(/\r?\n/).forEach(line =>  {
    var calories = 0;
    if (line) {
        elf_current += Number(line)
        elf_cals[elf_count] = elf_current
    }
    else {
        elf_count++
        elf_current = 0
    }
  });
  console.log(`elf_count: ${elf_count}`);

//   console.log(`before max elf_cals: ${elf_cals}`);
  const max = Math.max(...elf_cals);
  console.log(`max elf_cals: ${max}`);

//   console.log(`before sorted elf_cals: ${elf_cals}`);
  elf_cals.sort(function(a, b){return b - a})
  console.log(`elf_cals1: ${elf_cals[0]}`);
  console.log(`elf_cals2: ${elf_cals[1]}`);
  console.log(`elf_cals3: ${elf_cals[2]}`);

  const top3_cals = elf_cals[0] + elf_cals[1] + elf_cals[2]
  console.log(`top3 cals total: ${top3_cals}`);
});




// const yargs = require("yargs");
// const axios = require("axios");

// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .option("s", { alias: "search", describe: "Search term", type: "string" })
//  .argv;

// const greeting = `Hello, ${options.name}!`;
// console.log(greeting);

// if (options.search) {
//  console.log(`Searching for jokes about ${options.search}...`)
// } else {
//  console.log("Here's a random joke for you:");
// }

// // The url depends on searching or not
// const url = options.search ? `https://icanhazdadjoke.com/search?term=${escape(options.search)}` : "https://icanhazdadjoke.com/";

// axios.get(url, { headers: { Accept: "application/json", "User-Agent": "axios 0.21.1" } })
//  .then(res => {
//    if (options.search) {
//      // if searching for jokes, loop over the results
//      res.data.results.forEach( j => {
//        console.log("\n" + j.joke);
//      });
//      if (res.data.results.length === 0) {
//        console.log("no jokes found :'(");
//      }
//    } else {
//      console.log(res.data.joke);
//    }
//  });
 
 
//  .catch(() => {e => console.log(e)});