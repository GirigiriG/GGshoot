import Navigation from './components/navigation/navigation.components';
import Card from './components/card/card.components';
import Gallery from './components/gallery/gallery.components';
import mockData, { IData } from './data/mockdata';
import Modal from './components/modal/modal.components';
import './App.css';
import { useEffect, useState } from 'react';
import { setModalImage, toggle } from './store/modal-slice';
import {useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store';

function App() {
  const isModalOpen = useSelector((state: RootState) => state.modalReducer.isVisible);
  const [MockdataFetch, setMockDataFetch] = useState<IData[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMockDataFetch(mockData);
  }, []);

  function showModal(imageURL: string) {
    dispatch(toggle(isModalOpen));
    dispatch(setModalImage(imageURL));
  }
  
  return (
    <div>
      {isModalOpen && <Modal/>}
      <Navigation></Navigation>
      <div className="main">
        {MockdataFetch?.map((data) => {
          return (
            <Card widthInPercentage={data.width}  maxHeightPx={data.height} published={data.published}>
                <div className="over-lay" onClick={() => showModal(data.imageURL)}>
                    <p>By: <span>{data.author}</span></p>
                </div>
              <img src={data.imageURL} alt="" />
            </Card>
          )
        })}

        <Gallery></Gallery>
      </div>
    </div>
  )
}

export default App

