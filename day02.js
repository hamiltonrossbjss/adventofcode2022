#!/usr/bin/env node

const fs = require('fs/promises');

async function load_input() {
  try {
    const data = await fs.readFile('day02_input.txt', { encoding: 'utf8' });
    return data
  } catch (err) {
    console.log(err);
  }
}

// var elf_count = 0;
// var elf_current = 0;
// var elf_cals = [0];
var my_total_score = 0;

load_input().then(allFileContents => { 
allFileContents.split(/\r?\n/).forEach(line =>  {
  my_hand_score = 0
  my_game_score = 0
  game = line.split(" ")
  switch(game[1]) {
    case 'X':
      // Rock A & X
      my_hand_score += 1
      switch(game[0]){
        case 'A':
          my_game_score += 3
          break;
        case 'B':
          my_game_score += 0
          break;
        case 'C':
          my_game_score += 6
          break;
      }
      break;
    case 'Y':
      // Paper B & Y
      my_hand_score += 2
      switch(game[0]){
        case 'A':
          my_game_score += 6
          break;
        case 'B':
          my_game_score += 3
          break;
        case 'C':
          my_game_score += 0
          break;
      }
      break;
    case 'Z':
      //Sissors C & Z
      my_hand_score += 3
      switch(game[0]){
        case 'A':
          my_game_score += 0
          break;
        case 'B':
          my_game_score += 6
          break;
        case 'C':
          my_game_score += 3
          break;
      }
      break;
    }
      console.log(`game_player1: ${game[0]} - game_player2: ${game[1]} - game: ${my_game_score} hand: ${my_hand_score}`);
      my_total_score += my_game_score + my_hand_score
      console.log(`my total: ${my_total_score}`)
  });
  // console.log(`elf_count: ${elf_count}`);

//   console.log(`before max elf_cals: ${elf_cals}`);
  // const max = Math.max(...elf_cals);
  // console.log(`max elf_cals: ${max}`);

//   console.log(`before sorted elf_cals: ${elf_cals}`);
  // elf_cals.sort(function(a, b){return b - a})
  // console.log(`elf_cals1: ${elf_cals[0]}`);
  // console.log(`elf_cals2: ${elf_cals[1]}`);
  // console.log(`elf_cals3: ${elf_cals[2]}`);

  // const top3_cals = elf_cals[0] + elf_cals[1] + elf_cals[2]
  // console.log(`top3 cals total: ${top3_cals}`);
  // console.log(`game: ${game}`);
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