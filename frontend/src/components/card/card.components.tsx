import { ReactNode } from 'react';
import './card.css';

interface IProps {
    children: ReactNode,
    published: boolean
}

export default function Card({children, published}: IProps) {
    return (
        <div className='card' style={{display: published ? 'block' : 'none'}}>
            {children}
        </div>
    )
}