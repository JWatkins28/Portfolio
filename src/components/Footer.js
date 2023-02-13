import React, { useState } from 'react';

export default function Footer() {

    return (
        <div className="z-2 fixed bottom-0 px-2 h-12 w-full mx-auto bg-black text-white">
            <div className="relative h-full flex items-center justify-around">
                <a href="#">Github</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
            </div>
        </div>
    )
}