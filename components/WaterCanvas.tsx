"use client";

import { useEffect, useRef } from "react";

/**
 * Living water — the one authored 3D moment.
 * Layered-sine caustics (Lagoon on Abyss) on a three.js plane, with
 * pointer-parallax light. DPR capped, paused offscreen, fully disposed.
 * Never mounted under prefers-reduced-motion (static gradient fallback).
 */
export default function WaterCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: import("three").WebGLRenderer | null = null;
    let raf = 0;
    let running = true;
    const pointer = { x: 0.5, y: 0.4, tx: 0.5, ty: 0.4 };
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    async function init() {
      const THREE = await import("three");
      if (cancelled || !mount) return;

      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const uniforms = {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0.5, 0.4) },
        uRes: { value: new THREE.Vector2(1, 1) },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        depthWrite: false,
        depthTest: false,
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uPointer;
          uniform vec2 uRes;

          float wave(vec2 p, float t) {
            float w = 0.0;
            w += sin(p.x * 3.1 + t * 0.7) * 0.5;
            w += sin(p.y * 4.3 - t * 0.5) * 0.35;
            w += sin((p.x + p.y) * 2.2 + t * 0.4) * 0.4;
            w += sin(length(p - vec2(0.5, 0.45)) * 6.0 - t * 0.8) * 0.25;
            return w;
          }

          void main() {
            vec2 p = vUv;
            p.x *= uRes.x / uRes.y;
            float t = uTime;
            float w1 = wave(p * 1.6, t);
            float w2 = wave(p * 2.7 + w1 * 0.35 + vec2(1.7, 9.2), t * 1.3);
            float caustic = pow(abs(sin(w1 * 2.0 + w2 * 1.6)), 6.0);
            float glow = pow(abs(sin(w2 * 1.2 - t * 0.25)), 10.0) * 0.6;

            vec3 abyss = vec3(0.039, 0.078, 0.070);
            vec3 deep = vec3(0.063, 0.114, 0.106);
            vec3 lagoon = vec3(0.055, 0.604, 0.580);

            float d = distance(vUv, uPointer);
            float light = smoothstep(0.55, 0.0, d);

            vec3 col = mix(abyss, deep, 0.5 + 0.5 * w1 * 0.4);
            col += lagoon * caustic * (0.35 + 0.65 * light);
            col += lagoon * glow * 0.35;
            col += vec3(0.5, 0.89, 0.87) * pow(caustic, 3.0) * light * 0.5;

            float vig = smoothstep(1.05, 0.35, distance(vUv, vec2(0.5, 0.45)));
            col *= mix(0.55, 1.0, vig);
            gl_FragColor = vec4(col, 1.0);
          }
        `,
      });

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const t0 = performance.now();
      const onPointer = (e: PointerEvent) => {
        const r = mount.getBoundingClientRect();
        pointer.tx = (e.clientX - r.left) / Math.max(r.width, 1);
        pointer.ty = 1 - (e.clientY - r.top) / Math.max(r.height, 1);
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      const resize = () => {
        const w = mount.clientWidth || 1;
        const h = mount.clientHeight || 1;
        renderer?.setSize(w, h, false);
        uniforms.uRes.value.set(w, h);
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(mount);

      const io = new IntersectionObserver(
        ([entry]) => {
          running = entry.isIntersecting;
          if (running) loop();
        },
        { threshold: 0 }
      );
      io.observe(mount);

      function loop() {
        if (!running) return;
        raf = requestAnimationFrame(loop);
        pointer.x += (pointer.tx - pointer.x) * 0.04;
        pointer.y += (pointer.ty - pointer.y) * 0.04;
        uniforms.uTime.value = (performance.now() - t0) / 1000;
        uniforms.uPointer.value.set(pointer.x, pointer.y);
        renderer?.render(scene, camera);
      }
      loop();

      cleanup = () => {
        running = false;
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", onPointer);
        mesh.geometry.dispose();
        material.dispose();
        renderer?.dispose();
        renderer?.domElement.remove();
        renderer = null;
      };
    }

    init().catch(() => {
      /* WebGL unavailable — static gradient fallback stays visible */
    });

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={mountRef} className="water" aria-hidden="true" />;
}
