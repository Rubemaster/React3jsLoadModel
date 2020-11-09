import * as THREE from "three";

const GetVertices = (vector) => [
  new THREE.Vector3(vector.x, 1, vector.y),
  new THREE.Vector3(vector.x, 0, vector.y)
];

export const MakeGeometry = (scene) => {
  const mesh = new THREE.Geometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x567d46 });
  const TargetCoordinates = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 2),
    new THREE.Vector2(1, 2)
  ];
  let targetCount = 0;
  TargetCoordinates.forEach((target) => {
    const vertices = GetVertices(target);
    mesh.vertices.push(vertices[0], vertices[1]);
    if (targetCount > 0) {
      mesh.faces.push(
        new THREE.Face3(
          0 + (targetCount - 1) * 2,
          1 + (targetCount - 1) * 2,
          2 + (targetCount - 1) * 2
        )
      );
      mesh.faces.push(
        new THREE.Face3(
          1 + (targetCount - 1) * 2,
          3 + (targetCount - 1) * 2,
          2 + (targetCount - 1) * 2
        )
      );
    }
    targetCount++;
  });
  mesh.computeBoundingSphere();
  const triangle = new THREE.Mesh(mesh, material);
  scene.add(triangle);
};
