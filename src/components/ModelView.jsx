import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full  ${index === 2} ? right-[100%]: ""`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        makeDefault
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? "small" : "large"`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <div>Loading</div>
            </Html>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
