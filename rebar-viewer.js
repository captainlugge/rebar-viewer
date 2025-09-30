export function init($widget) {
  const el = document.createElement("div");
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.backgroundColor = "red";
  el.style.color = "white";
  el.style.fontSize = "28px";
  el.style.display = "flex";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";
  el.innerText = "✅ Custom Element funktioniert!";
  $widget.appendChild(el);
}
