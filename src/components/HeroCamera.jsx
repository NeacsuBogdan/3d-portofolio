import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef(null);
    const target = [0, 0, 20]; // Array valid

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, target, 0.25, delta);

        if(!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/3,-state.pointer.x/5,0], 0.25, delta);
        }
    });

    return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
