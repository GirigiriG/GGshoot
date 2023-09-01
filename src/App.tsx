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
  const searchedAuthor = useSelector((state: RootState) => state.modalReducer.searchValue);
  const [MockdataFetch, setMockDataFetch] = useState<IData[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMockDataFetch(mockData);
    
    // const controller = new AbortController();
    // fetch(REST_URL, {signal: controller.signal})
  }, []);

  function showModal(imageURL: string) {
    dispatch(toggle(isModalOpen));
    dispatch(setModalImage(imageURL));
  }

  function renderImages(data: IData) {

    if (data.type == 'multiple') {
      return <Gallery images={data.images}/>;
    }

    return (  
        <Card widthInPercentage={data.width}  maxHeightPx={data.height} published={data.published}>
        <div className="over-lay" onClick={() => showModal(data.imageURL)}>
          <p>By: <span>{data.author}</span></p> 
        </div>
        <img src={data.imageURL}  alt=""/>
      </Card>
    )
  }
  
  return (
    <div>
      {isModalOpen && <Modal/>}
      <Navigation></Navigation>
      <div className="main">
        {MockdataFetch.filter(data => {
            return searchedAuthor === '' ? data : data.author.toLowerCase().includes(searchedAuthor.toLowerCase());
        })?.map((data) => {
          return renderImages(data)
        })}
      </div>
    </div>
  )
}

export default App