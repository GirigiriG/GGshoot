import './search.css';
import {FiSearch } from 'react-icons/fi' ;
import { useDispatch } from 'react-redux'
import { findImageByAuthor } from '../../store/global-state';

export default function Search() {
    const dispatch = useDispatch();
    function handleSearchOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(findImageByAuthor(event.target.value));
    }
    return (
        <div className='search'>
            <FiSearch color='black' className='icon' size='18' weight='bold'/>
            <input 
                type='text' 
                placeholder='Search by photographer...' 
                style={{fontSize: '14px'}} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleSearchOnChange(event)}}
            /> 
        </div>
    )
}