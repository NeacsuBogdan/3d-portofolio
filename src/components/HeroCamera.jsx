import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile, camZ = 20 }) => {
  const groupRef = useRef(null);
  const target = useMemo(() => [0, 0, camZ], [camZ]);

  useFrame((state, delta) => {
    // poziția camerei către target (Z variază cu device-ul)
    easing.damp3(state.camera.position, target, 0.25, delta);

    // pointer merge și pe mobile (touch) – doar redu amplitudinea
    const k = isMobile ? 0.5 : 1; // factor mai mic pe mobile
    const rx = -state.pointer.y / 3 * k;
    const ry = -state.pointer.x / 5 * k;
    if (groupRef.current) {
      easing.dampE(groupRef.current.rotation, [rx, ry, 0], 0.25, delta);
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
