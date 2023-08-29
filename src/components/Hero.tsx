import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

// type Props = {}

function Hero(
    // {}: Props
    ) {

    const [text] = useTypewriter({
        words: [
            "Hi, I'm Blake Stillwell",
            "Welcome to my portfolio"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className="flex flex-row justify-center">
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
    </div>
  )
}

export default Hero