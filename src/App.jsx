import React from 'react'
import { range } from 'd3'
import { Face } from './components/Face'

export const App = () => {
    const width = 200
    const height = 200
    let array = range(9 * 4)

    setInterval(() => {
        window.location.reload(true)
    }, 1000)

    return (
        array.map((_, index) => (
            <Face
                key={index}
                width={width}
                height={height}
                centerX={width / 2}
                centerY={height / 2}
                strokeWidth={10}
                eyeOffsetX={20 + Math.random() * 9}
                eyeOffsetY={20 + Math.random() * 15}
                eyeRadius={5 + Math.random() * 10}
                mouthWidth={7 + Math.random() * 9}
                mouthRadius={30 + Math.random() * 10}
            />
        ))

    )
}