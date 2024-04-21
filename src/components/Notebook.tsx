import { useGLTF, Html } from "@react-three/drei";
import Page from "./Page";

export function Notebook(props: any) {
  const { nodes, materials } = useGLTF("/Laptop.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Cube.geometry}
        material={(nodes as any).Cube.material}
      />
      <mesh castShadow receiveShadow>
        <Html
          className="screen"
          transform
          occlude
          position={[0, 12.851, -5.38028]}
          style={{
            backgroundColor: "red",
            width: "914px",
            height: "652px",
            overflowY: "auto",
          }}
        >
          <Page />
          <Page />
          <Page />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).TouchpadBtns.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Plane007_1.geometry}
        material={materials.grey}
      />
    </group>
  );
}

useGLTF.preload("/Laptop.glb");
