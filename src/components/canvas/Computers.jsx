import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  // Load the 3D model from a glTF file
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      {/* Add a hemisphere light to the scene with intensity 1 and black ground color */}
      <hemisphereLight intensity={1} groundColor="black" />
      {/* Add a point light to the scene with intensity 3 */}
      <pointLight intensity={3} />
      {/* Add a spot light to the scene at position [10, 50, 3] with specific angle, penumbra, intensity, and it casts shadow */}
      <spotLight
        position={[10, 50, 3]}
        angle={0.2}
        penumbra={1}
        intensity={25000}
        castShadow
      />
      {/* Add the loaded 3D model to the scene with specific scale, position, and rotation */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile?
          [0,-3,-2] :
          [-2, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // State to hold whether the device is mobile or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create a media query that returns true if the device width is less than or equal to 500px
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the isMobile state based on the media query
    setIsMobile(mediaQuery.matches);

    // Function to handle changes in the media query
    const handleMediaQueryChange = (event) => {
      // Update the isMobile state when the media query result changes
      setIsMobile(event.matches);
    }

    // Add a listener for changes in the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  });

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Add orbit controls to the scene */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Add the Computers component to the scene */}
        <Computers isMobile={isMobile}/>
      </Suspense>
      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;