import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { Notebook } from './Notebook';
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

export default function Scene() {
  return (
    <div className='container'>
      <Canvas
        camera={{
          position: [0, 6, 25], 
          fov: 95
        }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 3.4
        }}
      >
        {/* <mesh>
        <boxGeometry  args={[1, 1, 1]} />
        <meshBasicMaterial color={'red'} />
      </mesh> */}
        <Suspense fallback={null}>
          <Notebook />
        </Suspense>

        <directionalLight
          position={[10, 10, 10]}
          color={'#fff'}
          intensity={1.3}
        />
        <ambientLight intensity={1.5} color={'#fff'} />
        <OrbitControls target={[0, 5, 1]} />
      </Canvas>
    </div>
  )
}
