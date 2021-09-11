import React from 'react'
interface buttonProps {
    text?: string;
}
export default function button({text}: buttonProps) {
    return (
        <div>
            <button>{text}</button>
        </div>
    )
}
