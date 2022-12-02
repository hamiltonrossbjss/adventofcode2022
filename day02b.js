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

var my_total_score = 0;


load_input().then(allFileContents => {
  allFileContents.split(/\r?\n/).forEach(line => {
    const game = line.split(" ");
    var hand_to_play = win_lose_or_draw(game[0], game[1])
    play_hand(game[0], hand_to_play);
    console.log(`my total: ${my_total_score}`)
  });

  // Y = Draw, X = Lose, Z = Win
  // Rock A & X
  // Paper B & Y
  // Sissors C & Z
  function win_lose_or_draw(player1, player2) {
    switch (player2) {
      case 'Y':
        // Draw
        switch (player1) {
          case 'A':
            return 'X'
          case 'B':
            return 'Y'
          case 'C':
            return 'Z'
        }
        break;
      case 'X':
        // Lose
        switch (player1) {
          case 'A':
            return 'Z'
          case 'B':
            return 'X'
          case 'C':
            return 'Y'
        }
        break;
      case 'Z':
        //Win
        switch (player1) {
          case 'A':
            return 'Y'
          case 'B':
            return 'Z'
          case 'C':
            return 'X'
        }
        break;
    }
  }

  function play_hand(player1, player2) {
    var my_hand_score = 0
    var my_game_score = 0
    switch (player2) {
      case 'X':
        // Rock A & X
        my_hand_score += 1;
        switch (player1) {
          case 'A':
            my_game_score += 3;
            break;
          case 'B':
            my_game_score += 0;
            break;
          case 'C':
            my_game_score += 6;
            break;
        }
        break;
      case 'Y':
        // Paper B & Y
        my_hand_score += 2;
        switch (player1) {
          case 'A':
            my_game_score += 6;
            break;
          case 'B':
            my_game_score += 3;
            break;
          case 'C':
            my_game_score += 0;
            break;
        }
        break;
      case 'Z':
        //Sissors C & Z
        my_hand_score += 3;
        switch (player1) {
          case 'A':
            my_game_score += 0;
            break;
          case 'B':
            my_game_score += 6;
            break;
          case 'C':
            my_game_score += 3;
            break;
        }
        break;
    }
    console.log(`game: ${my_game_score} hand: ${my_hand_score}`);
    my_total_score += my_game_score + my_hand_score
  }
});
