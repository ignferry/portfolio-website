import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Octahedron (props) {
    const ref = useRef();
  
    const [hovered, hover] = useState(false);
  
    useFrame((state,delta) => {
        ref.current.rotation.y += delta * 0.3;
      }
    );
 
    return (
      <mesh      
        {...props}
        ref={ref}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      > 
        <octahedronGeometry args={[3, 0]} />      
        <meshStandardMaterial color={hovered ? "green" : "blue" } roughness={0.6}/>   
      </mesh>
    );
}

export default function HeroImage() {
    const [mode, setMode] = useState("light");

    useEffect(() => {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => setMode(e.matches ? "dark" : "light"));
      setMode(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }, []);

    return (
        <div className="w-72 h-72">
            <Canvas>
                <color attach="background" args={mode == "dark" ? ["#000"] : ["rgb(248, 250, 252)"]} />
                <ambientLight intensity={0.1} />      
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
                <pointLight position={[5, 10, 5]} intensity={2}/> 
                <pointLight position={[-5, -5, 8]} color="#f00" intensity={2}/>       
                <Octahedron position={[0, 0, 0]} />       
            </Canvas>
        </div>
    );
}