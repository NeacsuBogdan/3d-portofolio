import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';

export default function useScreenAnchor({ x = 0.5, y = 0.5, z = 0 }) {
  const { size, camera } = useThree();

  return useMemo(() => {
    const dist = Math.abs((camera.position?.z ?? 0) - z);
    const halfH = Math.tan((camera.fov * Math.PI) / 180 / 2) * dist;
    const halfW = halfH * (size.width / size.height);

    const worldX = (x - 0.5) * 2 * halfW;   // 0..1 -> -halfW..+halfW
    const worldY = (0.5 - y) * 2 * halfH;   // 0..1 -> +halfH..-halfH
    return [worldX, worldY, z];
  }, [size.width, size.height, camera.fov, camera.position.z, x, y, z]);
}
