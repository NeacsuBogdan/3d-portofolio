import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import Anchored from '../components/Anchored.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const ANCHOR = { x: 0.47, y: 0.40, z: 0.0 }; 
  const LOGO_Z_OFFSET = -0.8;

  return (
    <section className="min-h-screen w-full flex-col relative" id="home">

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Bogdan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Cool Projects</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, sizes.cameraZ], fov: sizes.fov }}>
          <PerspectiveCamera makeDefault position={[0, 0, sizes.cameraZ]} fov={sizes.fov} />
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile} camZ={sizes.cameraZ}>
              <HackerRoom
                scale={sizes.dijinScale * 0.85}
                position={sizes.dijinPosition}
                rotation={[0, -Math.PI / 2, 0]}
              />

              <Anchored x={ANCHOR.x} y={ANCHOR.y} z={ANCHOR.z}>
                <Cube position={[0, 0, 0]} />
                <group position={[0, 0, LOGO_Z_OFFSET]}>
                  <ReactLogo scale={sizes.reactLogoScale} />
                </group>
              </Anchored>

              <ambientLight intensity={0.2} />
              <directionalLight position={[15, 5, 10]} intensity={3} />

              <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} radius={0.1} intensity={1} />
              </EffectComposer>
            </HeroCamera>

            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work togheter" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
