import React, { useRef, useEffect } from 'react'
import {useGLTF, useVideoTexture} from '@react-three/drei'
import * as THREE from 'three'
import gsap from "gsap";

const DemoComputer = (props) => {

    const group = useRef();

    const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4' )
    const animationInProgress = useRef(false); // Flag pentru a preveni animațiile multiple
    useEffect(() => {
        if (group.current && !animationInProgress.current) {
            animationInProgress.current = true;

            // Anulează animațiile anterioare (dacă există) pentru a preveni suprapunerea
            gsap.killTweensOf(group.current.rotation);

            // Aplica animația
            gsap.from(group.current.rotation, {
                y: Math.PI / 2,
                duration: 1,
                ease: 'power3.out',
                onComplete: () => {
                    animationInProgress.current = false; // Animația s-a terminat
                },
            });
        }
    }, [txt]);  // Trigger pentru fiecare schimbare a texturii


    useEffect(() => {
        if (txt) {
            txt.rotation = -Math.PI / 2; // Rotește textura 90° spre dreapta

            txt.wrapS = txt.wrapT = THREE.RepeatWrapping; // Evită marginile negre

            // Scale down textura (0.5 înseamnă că este la jumătate din dimensiune)
            txt.repeat.set(1.9, 3);

            // Poți ajusta poziția imaginii pe mesh dacă e necesar
            txt.offset.set(2, 0.4);

            txt.needsUpdate = true;
        }
    }, [txt]);



    const { nodes, materials } = useGLTF('/models/monitor.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[-0.09, 0.7, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.Apple_LP}
                            position={[5.047, -15.99, 1.135]}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.Apple_LP}
                            position={[38.042, -13.574, 1.862]}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Monitor.geometry}
                            material={materials.Apple_LP}
                            position={[6.213, 1.083, 32.457]}
                        >
                            <meshBasicMaterial map={txt}/>
                        </mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials.Apple_LP}
                            position={[6.268, 4.303, 25.538]}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/monitor.glb')

export default DemoComputer;