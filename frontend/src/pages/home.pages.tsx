import './home.css'

import Navigation from '../components/navigation/navigation.components';
import Card from '../components/card/card.components';
import Gallery from '../components/gallery/gallery.components';
import mockData, { IData } from '../data/mockdata';
import Modal from '../components/modal/modal.components';
import { useEffect, useState } from 'react';
import { setModalImage, toggleMoal } from '../store/global-state';
import {useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store';

export default function Home () {

  const isModalOpen = useSelector((state: RootState) => state.modalReducer.isModalVisible);
  const searchedAuthor = useSelector((state: RootState) => state.modalReducer.searchValue);
  const [MockdataFetch, setMockDataFetch] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('mockdata', JSON.stringify(mockData))
    const mock = localStorage.getItem('mockdata');
    const newImages = localStorage.getItem('newImages');
    
    if (mock) {
      const someData: IData[] = JSON.parse(mock)

      if (newImages) {
        const uploadedImages: IData[] = JSON.parse(newImages);
        
        for (let image of uploadedImages) {
          someData.push(image);
        }
      }

      setMockDataFetch(someData);
    }
    
    // const controller = new AbortController();
    // fetch(REST_URL, {signal: controller.signal})
  }, []);

  function showModal(imageURL: string) {
    dispatch(toggleMoal(isModalOpen));
    dispatch(setModalImage(imageURL));
  }

  function renderImages(data: IData) {
    if (data.type == 'multiple') {
      return <Gallery  images={data.images} key={data.imageURL}/>;
    }

    return (  
        <Card widthInPercentage={data.width}  maxHeightPx={data.height} published={data.published} key={data.imageURL}>
          <div className='over-lay' onClick={() => showModal(data.imageURL)}>
            <p>By: <span>{data.author}</span></p> 
          </div>
          <img src={data.imageURL} alt=''/>
      </Card>
    )
  }

  return (
    <>
      {isModalOpen && <Modal/>}
      <Navigation></Navigation>
      <div className='main'>
        {MockdataFetch.filter(data => {
            return searchedAuthor === '' ? data : data.author.toLowerCase().includes(searchedAuthor.toLowerCase());
        })?.map((data) => {
          return renderImages(data)
        })}
      </div>
    </>
  )
}