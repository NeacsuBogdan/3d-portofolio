import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Float, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const ReactLogo = (props) => {
    return (
        <group {...props}>
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Atom />
            </Float>
            <EffectComposer>
            </EffectComposer>
        </group>
    );
};

const Atom = () => {
    return (
        <group>
            <Electron speed={6} />
            <Electron speed={6.5} rotation={[0, 0, Math.PI / 3]} />
            <Electron speed={7} rotation={[0, 0, -Math.PI / 3]} />
            <Sphere args={[0.35, 64, 64]} castShadow receiveShadow>
                <meshStandardMaterial color={'#61DAFB'} metalness={0.7} roughness={0.3} />
            </Sphere>
        </group>
    );
};

const Electron = ({ radius = 2.75, speed = 6, ...props }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.position.set(100, 100, 100); // Poziție inițială în afara ecranului
        }
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        ref.current.position.set(
            Math.sin(t) * radius,
            (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
            Math.cos(t) * radius * 0.5  // Mișcare pe axa Z pentru adâncime
        );
    });

    return (
        <group {...props}>
            <Trail width={5} length={10} color={new THREE.Color('#2188D1')} attenuation={(t) => t * t}>
                <mesh ref={ref} castShadow={1}>
                    <sphereGeometry args={[0.25]} />
                    <meshStandardMaterial color={'#61DAFB'} metalness={0.7} roughness={0.3} />
                </mesh>
            </Trail>
        </group>
    );
};

export default ReactLogo;
