import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import { Preload } from '@react-three/drei';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Evită un mic “jump” la mount, randând canvasul doar pe client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex-col relative" id="home">
      <div className="w-full max-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Bogdan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Cool Projects</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {mounted && (
          <Canvas
            // setează camera din start (fără să mai folosești <PerspectiveCamera/>)
            camera={{ position: [0, 0, 20], fov: 50, near: 0.1, far: 1000 }}
            dpr={[1, 2]}
            gl={{ antialias: true }}
            onCreated={({ camera }) => {
              camera.lookAt(0, 0, 0);
            }}
          >
            <Suspense fallback={<CanvasLoader />}>
              {/* Background stabil, evită flash-uri transparente */}
              <color attach="background" args={['#0b0b0b']} />

              {/* Nu mai folosi <PerspectiveCamera makeDefault .../> aici */}

              <ReactLogo position={sizes.reactLogoPosition} />

              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.dijinScale}
                  position={sizes.dijinPosition}
                  rotation={[0, -Math.PI / 2, 0]}
                />

                <Cube position={sizes.cubePosition} />

                <ambientLight intensity={0.2} />
                <directionalLight position={[15, 5, 10]} intensity={3} />

                <EffectComposer>
                  <Bloom mipmapBlur luminanceThreshold={1} radius={0.1} intensity={1} />
                </EffectComposer>
              </HeroCamera>

              {/* Preîncarcă toate asset-urile înainte de a “elibera” Suspense */}
              <Preload all />
            </Suspense>
          </Canvas>
        )}
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
