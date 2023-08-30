import './modal.css';
import {useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store';
import { toggle } from '../../store/modal-slice';

export default function Modal() {
    const dispatch = useDispatch();
    const image = useSelector((state: RootState) => state.modalReducer.imageURL);
    const isModalOpen = useSelector((state: RootState) => state.modalReducer.isVisible);
        
    return (
        <div className='modal' onClick={() => dispatch(toggle(isModalOpen))}>
            <div className='content'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}