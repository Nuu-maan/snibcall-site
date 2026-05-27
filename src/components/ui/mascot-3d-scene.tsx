"use client";

import {
  Bounds,
  Center,
  Environment,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";

// Cursor turns the head with a quiet idle bob. Values are radians, so
// the absolute numbers are smaller than the CSS-degree equivalents.
const MAX_ROT_Y_RAD = 0.55;
const MAX_ROT_X_RAD = 0.38;
const LERP = 0.11;
const IDLE_BOB_AMPLITUDE = 0.04;
const IDLE_BOB_SPEED = 1.2;

useGLTF.preload("/mascot.glb");

function Model({ onReady }: { onReady: () => void }) {
  const groupRef = useRef<Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const { scene, animations } = useGLTF("/mascot.glb");
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    onReady();
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.reset().play();
    }
  }, [actions, onReady]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (reduced.matches || coarse.matches) {
      return;
    }
    function onMove(event: PointerEvent) {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      const dx = Math.max(-1, Math.min(1, (event.clientX - halfW) / halfW));
      const dy = Math.max(-1, Math.min(1, (event.clientY - halfH) / halfH));
      target.current.x = dx;
      target.current.y = dy;
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) {
      return;
    }
    const desiredRotY = target.current.x * MAX_ROT_Y_RAD;
    // No negation: in three.js positive rotation.x bows the model
    // forward (looks down), so mouse-up (target.y < 0) maps directly
    // to a negative rotation.x (looks up).
    const desiredRotX = target.current.y * MAX_ROT_X_RAD;
    group.rotation.y += (desiredRotY - group.rotation.y) * LERP;
    group.rotation.x += (desiredRotX - group.rotation.x) * LERP;
    const t = state.clock.getElapsedTime();
    group.position.y = Math.sin(t * IDLE_BOB_SPEED) * IDLE_BOB_AMPLITUDE;
  });

  return (
    <group ref={groupRef}>
      {/* GLB authored facing -Z; flip 180° so the mascot faces the camera. */}
      <group rotation={[0, Math.PI, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

interface MascotSceneProps {
  onReady: () => void;
}

export function MascotScene({ onReady }: MascotSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 35 }}
      dpr={[1, 2]}
      // `flat` disables ACES tone mapping — whites stay actually white
      // instead of getting compressed to grey.
      flat
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={2.4} />
      <hemisphereLight
        args={["#ffffff", "#f3e6e1", 1.6]}
        position={[0, 5, 0]}
      />
      <directionalLight intensity={3.2} position={[3, 4, 5]} />
      <directionalLight intensity={1.8} position={[-3, 2, -2]} />
      <directionalLight intensity={1.2} position={[0, -2, 3]} />
      <Suspense fallback={null}>
        {/* HDR studio environment so PBR whites read white. */}
        <Environment environmentIntensity={1.1} preset="studio" />
        <Bounds clip fit margin={0.95} observe>
          <Center>
            <Model onReady={onReady} />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
}
