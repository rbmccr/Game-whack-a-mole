selectPlaystyle.addEventListener("change", () => {
  playstyle = selectPlaystyle.value;
  interval = playstyle * 1000;
  console.log(playstyle, interval)
});

function startGame() {
  //if there is no grid built or if the game has already been started
  if (gridBoxes.length === 0 || intervalID != undefined) {
    return;
  }
  console.log(playstyle, interval);
  //call setInterval() and save ID for use with clearInterval()
  mole();
  intervalID = setInterval(mole, interval);
}

function classToggle() {
  //loop through boxes and remove mole class
  for (i = 0; i < gridBoxes.length; i++) {
    if (gridBoxes[i].classList.contains("mole")) {
      gridBoxes[i].classList.remove("mole");
    }
  }
}

function mole() {
  classToggle();
  let moleLocation;
  moleLocation = Math.floor(Math.random() * gridBoxes.length);
  console.log(moleLocation);
  gridBoxes[moleLocation].classList.toggle("mole");
}

container.addEventListener("click", (e) => {
  totalClicks++;
  if (e.target.classList.contains("mole")) {
    hits++;
    e.target.classList.remove("mole");
  }
  totalClicksDiv.innerHTML = `Total Clicks: ${totalClicks}`;
  hitsDiv.innerHTML = `Total Hits: ${hits}`;
  accuracyDiv.innerHTML = `Accuracy: ${((hits / totalClicks) * 100).toFixed(0)}%`;
});

function pauseGame() {
  if (intervalID === undefined) {
    startGame();
  } else {
    clearInterval(intervalID);
    intervalID = undefined;
  }
}

//remove grid boxes in gameplay container
function resetGame() {
  container.innerHTML = "";
  totalClicksDiv.innerHTML = "";
  hitsDiv.innerHTML = "";
  accuracyDiv.innerHTML = "";
  clearInterval(intervalID);
  classToggle();
}