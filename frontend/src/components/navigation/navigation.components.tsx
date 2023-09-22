import { Link } from 'react-router-dom';
import Search from '../search/search.componentes';
import './navigation.css'
import ProfileSetting from '../profile-setting/profile-setting.components';
export default function Navigation() {
    return (
        <div className='nav'>
            <Link to='/' className='link'>
                <h2>GGshoot</h2>
            </Link> 
            <div style={{display: 'flex'}}>
                <Search></Search>
                <ProfileSetting />
            </div>
        </div>
    )
}