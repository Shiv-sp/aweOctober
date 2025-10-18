const words = [
    { word: "safer", info: "‘Safer’ — Harm reduction focuses on making choices safer, not risk-free." },
    { word: "ghost", info: "‘Ghost’ — Be mindful at parties, stay with friends and don’t vanish into the night." },
    { word: "drink", info: "‘Drink’ — Hydrate and pace yourself; alternate with water at gatherings." },
    { word: "vapes", info: "‘Vapes’ — Know what’s in your vape; avoid sharing devices to reduce risk." },
    { word: "party", info: "‘Party’ — Plan your way home and check in with friends for a safe night." },
    { word: "spook", info: "‘Spook’ — Fear doesn’t stop fun, but awareness keeps everyone safe!" },
    { word: "pills", info: "‘Pills’ — Never take unknown substances; always test and use safely." },
    { word: "guard", info: "‘Guard’ — Be your friend’s guard; look out for each other on nights out." },
    { word: "witch", info: "‘Witch’ — Not all potions are safe; know your limits this Halloween!" },
    { word: "nurse", info: "‘Nurse’ — If someone feels off, don’t hesitate to seek help or call EMS." },
    { word: "alert", info: "‘Alert’ — Stay aware of your surroundings and make sure everyone gets home safe." },
    { word: "sober", info: "‘Sober’ — Support your friends and be a designated helper when needed." },
    { word: "candy", info: "‘Candy’ — Check your treats; not everything sweet is safe." },
    { word: "buddy", info: "‘Buddy’ — Always have a buddy system on nights out or at events." },
    { word: "sleep", info: "‘Sleep’ — Rest helps recovery. Don’t underestimate it after a night out." }
  ];
  
  const solution = words[Math.floor(Math.random() * words.length)];
  const grid = document.getElementById("grid");
  const input = document.getElementById("guessInput");
  const button = document.getElementById("guessButton");
  const message = document.getElementById("message");
  
  let currentRow = 0;
  let gameOver = false;
  
  // Create grid (6 rows × 5 columns)
  for (let i = 0; i < 30; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    grid.appendChild(tile);
  }
  
  button.addEventListener("click", handleGuess);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleGuess();
  });
  
  function handleGuess() {
    if (gameOver) return;
  
    const guess = input.value.toLowerCase();
    input.value = "";
  
    if (guess.length !== 5) {
      alert("Please enter a 5-letter word!");
      return;
    }
  
    const start = currentRow * 5;
    const tiles = Array.from(grid.children).slice(start, start + 5);
  
    for (let i = 0; i < 5; i++) {
      tiles[i].textContent = guess[i];
      if (guess[i] === solution.word[i]) {
        tiles[i].classList.add("correct");
      } else if (solution.word.includes(guess[i])) {
        tiles[i].classList.add("present");
      } else {
        tiles[i].classList.add("absent");
      }
    }
  
    currentRow++;
  
    if (guess === solution.word) {
      showEndMessage(`🎉 You got it! The word was <b>${solution.word.toUpperCase()}</b><br><br>${solution.info}`);
      gameOver = true;
    } else if (currentRow === 6) {
      showEndMessage(`💀 Out of tries! The word was <b>${solution.word.toUpperCase()}</b><br><br>${solution.info}`);
      gameOver = true;
    }
  }
  
  function showEndMessage(text) {
    message.innerHTML = text;
    message.classList.add("large-message");
  }
  