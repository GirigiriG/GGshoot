
import './modal.css';
import {useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store';
import { toggleMoal } from '../../store/global-state';

export default function Modal() {
    const dispatch = useDispatch();
    const image = useSelector((state: RootState) => state.modalReducer.imageURL);
    const isModalOpen = useSelector((state: RootState) => state.modalReducer.isModalVisible);
        
    return (
        <div className='modal' onClick={() => dispatch(toggleMoal(isModalOpen))}>
            <div className='content' onClick={(event) => {event.stopPropagation()}}>
                <img src={image} alt=''/>
            </div>
        </div>
    )
}