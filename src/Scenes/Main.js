import * as THREE from "three";
import { Load } from "./../Scripts/Load.js";
import { MakeGeometry } from "./../Scripts/MakeGeometry.js";

export const Main = (scene) => {
  Load(scene, "bench.obj");

  const light = new THREE.PointLight(0xf9d71c, 1, 5000);
  light.position.set(-500, 500, 500);
  scene.add(light);
  //MakeGeometry(scene);
};
