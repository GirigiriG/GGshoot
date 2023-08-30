import './search.css'
import {FiSearch } from 'react-icons/fi' 

export default function Search() {
    return (
        <div className='search'>
            <FiSearch color="black" class="icon" size="18" weight="bold"/>
            <input type="text" placeholder="search" style={{fontSize: "14px"}}/>
            
        </div>
    )
}