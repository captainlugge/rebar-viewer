// Lade model-viewer
const script = document.createElement("script");
script.type = "module";
script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
document.head.appendChild(script);

script.onload = () => {
  const viewer = document.createElement("model-viewer");
  viewer.id = "rebarModel";
  viewer.src = "https://static.wixstatic.com/3d/43717b_a3c76f2944b240c18255b122fbf04744.glb";
  viewer.style.width = "100%";
  viewer.style.height = "600px";
  viewer.setAttribute("camera-controls", "");
  $widget.appendChild(viewer);

  // Scroll → Explosion
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const t = scrollY / maxScroll;

    const scene = viewer.model?.scene;
    if (!scene) return;

    const mo = scene.getObjectByName("Exploded_MO");
    const mu = scene.getObjectByName("Exploded_MU");
    const rand = scene.getObjectByName("Exploded_RAND");
    const abstand = scene.getObjectByName("Exploded_ABSTAND");
    const ecken = scene.getObjectByName("Exploded_ECKEN");

    if (mo) mo.position.z = t * 2;
    if (mu) mu.position.z = -t * 2;
    if (rand) rand.position.x = t * 1.5;
    if (abstand) abstand.position.y = t * 1.5;
    if (ecken) ecken.position.y = -t * 1.5;
  });
};
