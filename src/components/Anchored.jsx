import React from 'react';
import useScreenAnchor from '../hooks/useScreenAnchor';

const Anchored = ({ x, y, z = 0, children }) => {
  const pos = useScreenAnchor({ x, y, z });
  return <group position={pos}>{children}</group>;
};

export default Anchored;
