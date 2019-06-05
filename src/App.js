import React from 'react';
import * as THREE from 'three';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scene = null;
    this.renderer = null;
    this.camera = null;
  }

  componentWillUnmount() {
    this.animationStop();
  }

  componentDidMount() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xababab);
    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 5;

    //create the renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(this.renderer.domElement);

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    this.animationLoop();
  }
  
  animationLoop = () => {
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(this.animationLoop);
  }

  render() {
    return (
      <div className="App">
        <div
          style={{ width: '400px', height: '400px' }}
          ref={(mount) => { this.mount = mount }}
        />
      </div>
    );
  }
}

export default App;
