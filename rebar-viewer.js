// Dieser Code läuft in Wix Custom Elements Sandbox
export function init($widget) {
  const div = document.createElement("div");
  div.style.color = "white";
  div.style.fontSize = "28px";
  div.innerText = "✅ Hallo von GitHub Pages!";
  $widget.appendChild(div);
}
