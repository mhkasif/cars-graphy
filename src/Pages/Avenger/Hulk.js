import {
    ContactShadows,
    Html,
    OrbitControls,
    RoundedBox,
    Shadow,
    softShadows,
    useGLTFLoader,
  } from "drei";
  import React, { Suspense, useRef } from "react";
  import { useSpring,animated } from "react-spring";

  import { Canvas, useFrame } from "react-three-fiber";
  import { AmbientLight } from "three";
  import AvengerDetails from "../../Components/AvengersDetails/AvengerDetails";
  import { Section } from "../../Components/Sections/Sections";
  import "./Avenger.scss";
  import * as THREE from 'three'

  softShadows();
  const camera = new THREE.PerspectiveCamera( 75, (window.innerWidth) / window.innerHeight, 0.1, 1000 );
  camera.position.z=-12
  camera.position.y=5

  const Lights = () => {
    return (
      <React.Fragment>
       { /* <directionalLight
          castShadow
          shadow-mapSize-width={1024}
          shadow-camera-top={10}
          shadow-camera-far={50}
          shadow-camera-bottom={-10}
          shadow-mapSize-height={1024}
          position={[0, 10, 0]}
          intensity={1}
        /> */}
        <directionalLight position={[10, 20, 0]} intensity={1} />
        <directionalLight position={[-10, 20, 0]} intensity={1} />
        <directionalLight position={[0, 0, 20]} intensity={0.4} />
        <spotLight position={[1000, 1000, 0]} intensity={1} />
        <ambientLight intensity={0.7} />
      </React.Fragment>
    );
  };
  const Model = () => {
    const gltf = useGLTFLoader("/sceneHulk.gltf", true);
    console.log(gltf);

    return <primitive position={[0,3,0]} object={gltf.scene} dispose={null} />;
  };

  const HtmlContent = () => {
    const ref = useRef(null);
    useFrame(() => (ref.current.rotation.y += 0.01));
    return (
      <mesh  ref={ref} position={[0, -1, 0]}>
      <Model />
      </mesh>
      //{/*  <Html fullscreen>
        // <group position={[0, 250, 0]}>
        // <Section factor={1.5} offset={1}>
        // </Section>
        // </group>
        //     <div className="sub-container">hello</div>
       //   </Html> */}
      )
  };
  const Loading = () => {
    return <h1>Loading</h1>;
  };
  const Avenger = () => {
    const props = useSpring({delay:200,config:{duration:1200},to:{opacity: 1}, from: {opacity: 0}})

    return (
      <div className="container">
        <div className="avenger-model">
          <Canvas
            // shadowMap
            colorManagement
            // camera={{ position: [0, 30, 190], fov: 50 }}
            camera={camera}
          >
            <Lights />
            {/* <directionalLight
              castShadow
              shadow-mapSize-width={1024}
              shadow-camera-top={10}
              shadow-camera-far={10}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-bottom={-10}
              shadow-mapSize-height={1024}
              position={[-5, 2, 10]}
              intensity={2}
            />
            <ContactShadows
              opacity={1}
              width={1}
              height={1}
              blur={1} // Amount of blue (default=1)
              far={10} // Focal distance (default=10)
              resolution={256} // Rendertarget resolution (default=256)
            /> */}
            {/*  <group>
        <mesh
        receiveShadow

        rotate={[-Math.PI/2,0,0]} position={[0,0,0]}
        >
        <planeBufferGeometry attach='geometry' args={[100,100]}/>
         <shadowMaterial attach='material' opacity={0.8}/>
   <meshStandardMaterial  attach='material' color='yellow' />

        </mesh>
        </group>
        */}
            <Suspense fallback={null}>
              <HtmlContent />
            </Suspense>
            <OrbitControls></OrbitControls>
            {/* <Shadow
    color="black" // Color (default:black)
    colorStop={0} // First gradient-stop (default:0)
    opacity={0.5} // Alpha (default:0.5)
    fog={false} // Reacts to fog (default=false)
  /> */}
          </Canvas>
        </div>
        <animated.div style={props} className="avenger-details">
          <AvengerDetails />
        </animated.div>
      </div>
    );
  };

  export default Avenger;
