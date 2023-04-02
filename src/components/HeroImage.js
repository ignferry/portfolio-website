import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box (props) {
    const ref = useRef()
  
    const [hovered, hover] = useState(false)
  
    useFrame((state,delta) => {
        ref.current.rotation.y += delta * 0.3;
    }
    )
 
    return (
      <mesh      
        {...props}
        ref={ref}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      > 
        <octahedronGeometry args={[3, 0]} />      
        <meshStandardMaterial color={hovered ? 'green' : 'blue' } roughness={0.6}/>   
      </mesh>
    )
}

export default function HeroImage() {
    return (
        <div className="w-72 h-72">
            <Canvas>
                <color attach="background" args={['#000']} />
                <ambientLight intensity={0.1} />      
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
                <pointLight position={[5, 10, 5]} intensity={1}/> 
                <pointLight position={[-5, -5, 8]} color="#f00" intensity={1}/>       
                <Box position={[0, 0, 0]} />       
            </Canvas>
        </div>
    )
}