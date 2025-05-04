import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440 });
    const isMobile = useMediaQuery({maxWidth: 768 });
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full flex-col relative' id='home'>
            <div className='w-full max-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Bogdan
                    <span className='waving-hand'>
                        👋
                    </span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Building Products & Cool Projects
                </p>
            </div>

            <div className='w-full h-full absolute inset-0 '>
                {/*<Leva />*/}
                <Canvas>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.dijinScale}
                                position={sizes.dijinPosition}
                                rotation={[0, -Math.PI / 2, 0]}
                            />

                            <Cube position={sizes.cubePosition} />

                            {/* Lumină ambientală generală */}
                            <ambientLight intensity={0.2} />

                            {/* SpotLight central pentru iluminare */}
                            <directionalLight position={[15,5,10]} intensity={3}/>

                            {/* Efectul de Bloom pentru întreaga scenă */}
                            <EffectComposer>
                                <Bloom
                                    mipmapBlur
                                    luminanceThreshold={1}
                                    radius={0.1}
                                    intensity={1}
                                />
                            </EffectComposer>
                        </HeroCamera>
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#about' className='w-fit'>
                    <Button name="Let's work togheter" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
