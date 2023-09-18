import { Link } from 'react-router-dom';
import { BsPersonFillGear } from 'react-icons/bs';
import { FaRegAddressBook } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { LiaCameraSolid } from 'react-icons/lia';
import './profile-setting.css'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleProfileSettings } from '../../store/global-state';

export default function ProfileSetting () {
    const isSettingVisible = useSelector(( state: RootState) => state.modalReducer.isProfileSettingVisible)
    const dispatch = useDispatch();

    function settingItems() {
        return (
            <div className='settings'>
                <ul>
                    <Link to='/' className='link'>
                        <li> <span><BsPersonFillGear size={18} className='icon' /></span> Profile</li>
                    </Link>

                    <Link to='/' className='link'>

                        <li> <FaRegAddressBook size={18} className='icon' />Account</li>
                    </Link>

                    <Link to='/stats' className='link'>
                        <li> <span><GoGear size={18} className='icon' /></span>Settings</li>
                    </Link>
                    <Link to='/photos' className='link'>
                        <li> <span><LiaCameraSolid size={20} className='icon' /></span>Photos</li>
                    </Link>
                </ul>
            </div>
        )
    }

    return (
        <div className='proflile' onClick={(_: React.MouseEvent<HTMLInputElement> ) => { dispatch(toggleProfileSettings(isSettingVisible))}}>
            <img src='https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80' alt='' />
            
            {isSettingVisible && settingItems()}
        </div>
    )
}