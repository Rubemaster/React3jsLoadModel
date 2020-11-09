import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";
import { Main } from "./Scenes/Main.js";

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 100, height: 100 };
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
  componentDidMount() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(this.width, this.height);

    const camera = new THREE.PerspectiveCamera(
      50,
      this.width / this.height,
      0.1,
      1000
    );
    camera.position.z = 100;

    camera.position.x = -100;

    camera.position.y = 40;

    new OrbitControls(camera, renderer.domElement);
    Main(scene);

    const animate = () => {
      requestAnimationFrame(animate);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      renderer.render(scene, camera);
    };
    this.container.appendChild(renderer.domElement);
    animate();
  }

  render() {
    return <div ref={(el) => (this.container = el)} />;
  }
}

export default Scene;
