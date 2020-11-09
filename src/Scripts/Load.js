import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";
export const Load = (scene, modelName) => {
  let loader = new OBJLoader();

  loader.load(
    "https://rubenrick.online/resources/load_file.php?file_name=" + modelName,
    (object) => {
      object.children.forEach((child) => {
        child.material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        child.material.side = THREE.DoubleSide;
        console.log(child);
      });
      scene.add(object);
    },
    (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
    (error) => console.log(error)
  );
};
