import { Route, Routes } from  'react-router-dom'
import './App.css';
import Home from './pages/home.pages';
import Statistics from './components/statistics/statistics.components';
import { toggleProfileSettings } from './store/global-state';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { Root } from 'react-dom/client';

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
          <Route path='/stats' element={<Statistics/>}/>
        </Routes>
      </div>
  )
}

export default App