(function () {
  console.log("✅ rebar-viewer.js geladen");

  window.init = function ($widget) {
    console.log("✅ Wix hat init() aufgerufen");

    const box = document.createElement("div");
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.backgroundColor = "red";
    box.style.color = "white";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.fontSize = "24px";
    box.innerText = "Hallo aus GitHub Pages!";
    $widget.appendChild(box);
  };
})();
