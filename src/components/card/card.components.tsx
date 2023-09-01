import { ReactNode } from "react"
import './card.css'

interface ICard {
    widthInPercentage: string
    maxHeightPx: string
    children: ReactNode,
    published: boolean
}

export default function Card({widthInPercentage, maxHeightPx ,children, published}: ICard) {
    return (
        
        <div className="card" style={
            {width:`${widthInPercentage}%`, minHeight: `${maxHeightPx}px`, display: published ? 'block' : 'none'}
        }>
            {children}
        </div>
    )
}