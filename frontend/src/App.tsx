import { Route, Routes } from  'react-router-dom'
import './App.css';
import Home from './pages/home.pages';
import Settings from './pages/settings.pages';
import Statistics from './components/analytics/analytics.components';
import Photos from './pages/photo.pages';
import { toggleProfileSettings } from './store/global-state';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const isProfileSettingVisible = useSelector((state: RootState) => state.modalReducer.isProfileSettingVisible);
  const dispatch = useDispatch();

  function hideProfileSetting() {
    if (!isProfileSettingVisible) {
      return;
    }
    dispatch(toggleProfileSettings(true));
  }

  return (
      <div className='main-dom-root' onClick={() => hideProfileSetting() } >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/photos' element={<Photos />}/>
          <Route path='/stats' element={<Settings/>}/>
        </Routes>
      </div>
  )
}

export default App