
import './modal.css';
import {useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store';
import { toggleMoal } from '../../store/global-state';
import { useEffect } from 'react';

export default function Modal() {
    const dispatch = useDispatch();
    const image = useSelector((state: RootState) => state.modalReducer.imageURL);
    const isModalOpen = useSelector((state: RootState) => state.modalReducer.isModalVisible);
    

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                dispatch(toggleMoal(isModalOpen))
            }
        } )
    }, [])

    return (
        <div className='modal' onClick={(_) => dispatch(toggleMoal(isModalOpen))}>
            <div className='content' onClick={(event) => {event.stopPropagation()}}>
                <img src={image} alt=''/>
            </div>
        </div>
    )
}