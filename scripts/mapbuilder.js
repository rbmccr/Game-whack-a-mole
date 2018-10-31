function buildTiles() {
  container.innerHTML="";
  let fragment = document.createDocumentFragment();
  for(i = 0; i < grid * grid; i++) {
    let div = document.createElement("div");
    div.className = "box";
    div.style.height = `${100 / grid}%`
    div.style.flexBasis = `${100 / grid}%`
    fragment.appendChild(div);
  }
  container.style.border = "none";
  container.appendChild(fragment);
}

selectGrid.addEventListener("change", () => {
  grid = selectGrid.value;
});