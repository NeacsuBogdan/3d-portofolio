import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experince = () => {
    const [animationName, setAnimationName] = useState('idle')
    
    return (
        <section className='c-space my-20'>
            <div className='w-full text-white-600'>
                <h3 className='head-text'>
                    My Experince
                </h3>

                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12'>
                    <div className='col-span-1 rounded-lg bg-black-200 border border-black-300'>
                        <Canvas>
                            <ambientLight intensity={3.5} />
                            <spotLight position={[10,10,10]} angle={0.15} penumbra={2}/>
                            <directionalLight position={[10,10,10]} intensity={3}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>

                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className='col-span-2 rounded-lg bg-black-200 border border-black-300'>
                        <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                            {workExperiences.map(({id, name, pos, duration, title, animation, icon}) => (
                                <div key={id} className='grid grid-cols-[auto_1fr] items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group'
                                     onClick={() => setAnimationName(animation.toLowerCase())}
                                onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                onPointerOut={() => setAnimationName('idle')}>
                                    <div className='flex flex-col h-full justify-start items-center py-2'>
                                        <div className='rounded-3xl w-16 h-16 p-2 bg-black-600'>
                                            <img src={icon} alt='logo' className='w-full h-full'/>
                                        </div>
                                        <div className='flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden'/>
                                    </div>

                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white-800'>
                                            {name}
                                        </p>
                                        <p className='text-sm mb-5'>
                                            {pos}--{duration}
                                        </p>
                                        <p className='group-hover:text-white transition ease-in-out duration-500'>
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experince
