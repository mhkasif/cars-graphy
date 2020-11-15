import React from 'react';
import { Canvas } from 'react-three-fiber';
import {Html} from 'drei'
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
        <Canvas
        colorManagement
        camera={{position:[0,0,120],fov:70}}
        >
        <Html fullscreen>
        <div className="title">
        <h1>Thor</h1>
        </div>
        </Html>
        </Canvas>
        </div>
    );
}

export default Home;
