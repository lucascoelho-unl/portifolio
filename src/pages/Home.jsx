import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
    const audioRef = useRef(new Audio(sakura))
    audioRef.current.volume = 0.4
    audioRef.current.loop = true

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)
    const [showInstructions, setShowInstructions] = useState(() => {
        // Check localStorage to decide whether to show the instructions
        return !localStorage.getItem('instructionsShown');
    });

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play()
        }

        return () => {
            audioRef.current.pause();
        }
    }, [isPlayingMusic])

    const handleDismissInstructions = () => {
        setShowInstructions(false);
        // Set the flag in localStorage to indicate the instructions were shown
        localStorage.setItem('instructionsShown', 'true');
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
        let planeRotation = [0, 20.1, 0]

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition, planeRotation];
    };

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
        let islandRotation = [0.1, 4.7077, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43.4];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43.4];
        }

        return [screenScale, screenPosition, islandRotation];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
    const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize()

    return (
        <section className={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
            {/* Instruction Overlay */}
            {showInstructions && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="text-center text-white p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg max-w-lg">
                        <p className="text-xl font-bold mb-2">Welcome!</p>
                        <p className="text-sm break-words">
                            Grab the mouse and push it slowly to the side to slide through the island until you reach a mini-island, and a popup will appear! There are a few popups to be explored. Enjoy!
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={handleDismissInstructions}
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div
                className={`absolute top-28 left-0 right-0 z-10 flex items-center justify-center`}
            >
                <HomeInfo currentStage={currentStage} />
            </div>

            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={planeRotation}
                    />
                </Suspense>
            </Canvas>

            <div className='absolute bottom-2 left-2'>
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt="sound"
                    className='w-10 h-10 cursor-pointer object-contain'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    )
}

export default Home
