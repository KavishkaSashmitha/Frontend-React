import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Model = () => {
  const { scene } = useGLTF('3dModel/scene.gltf');
  const springProps = useSpring({
    scale: [0.8, 0.8, 0.8],
    position: [6, -6, -6],
    rotation: [0, Math.PI * 2, 0],
    config: { mass: 1, tension: 280, friction: 60 },
    loop: { reverse: true },
  });

  return <a.primitive object={scene} {...springProps} />;
};

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[#1d1f24] text-white">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-1/4 left-10 max-w-xl"
      >
        <div className="main-text mb-4">
          <h1 className="text-4xl font-bold mb-4">
            <Typewriter
              words={['Welcome To XYGEN.AI']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            At <span className="text-yellow-600 font-bold">XYGEN.AI</span>, we
            innovate at the intersection of technology and creativity,
            transforming ideas into reality through cutting-edge AI solutions.
            Join us in shaping the future.
          </p>
          <button
            className="mt-6 bg-[#e96709] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#eb7520] hover:scale-105 transition-transform duration-300"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#d4551a'; // Darker color on hover
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#e96709'; // Original color
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Go
          </button>
        </div>
      </motion.div>
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 5, 2]} intensity={1} />
        <Model />
        <OrbitControls />
      </Canvas>
    </section>
  );
};

export default HeroSection;
