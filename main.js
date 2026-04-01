import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Cena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Câmera em perspectiva
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(6, 6, 8);

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Controles
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0);

// Luz ambiente suave
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// Luz principal (key light)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// Luz de preenchimento (fill light)
const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
fillLight.position.set(-5, 3, -5);
scene.add(fillLight);

// Luz de recorte (back light)
const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
backLight.position.set(0, 5, -10);
scene.add(backLight);

// Grupo do cubo mágico
const rubiksCube = new THREE.Group();
scene.add(rubiksCube);

// Configuração dos cubinhos
const cubeSize = 0.95;
const spacing = 1.02;

const createMaterial = (color) => {
  return new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.4,
    metalness: 0.2
  });
};

// Cores do cubo mágico
const COLORS = {
  right: 0xff0000,   // vermelho
  left: 0xff8c00,    // laranja
  top: 0xffffff,     // branco
  bottom: 0xffff00,  // amarelo
  front: 0x00aa00,   // verde
  back: 0x0000ff,    // azul
  inner: 0x111111    // faces internas/escuras
};

// Criar 27 cubinhos do cubo mágico
for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

      const materials = [
        createMaterial(x === 1 ? COLORS.right : COLORS.inner),
        createMaterial(x === -1 ? COLORS.left : COLORS.inner),
        createMaterial(y === 1 ? COLORS.top : COLORS.inner),
        createMaterial(y === -1 ? COLORS.bottom : COLORS.inner),
        createMaterial(z === 1 ? COLORS.front : COLORS.inner),
        createMaterial(z === -1 ? COLORS.back : COLORS.inner)
    ];

      const miniCube = new THREE.Mesh(geometry, materials);
      miniCube.position.set(x * spacing, y * spacing, z * spacing);

      rubiksCube.add(miniCube);
    }
  }
}

// Rotação suave automática para dar efeito bonito
function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();

// Responsividade
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});