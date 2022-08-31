import React from 'react'

export const BackgroundCircle = ({ centerY, strokeWidth }) => (
    <circle
        r={centerY - strokeWidth / 2}
        fill='yellow'
        stroke='black'
        strokeWidth={strokeWidth}
    />
)
