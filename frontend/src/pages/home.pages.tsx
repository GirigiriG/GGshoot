import './home.css'

import Navigation from '../components/navigation/navigation.components';
import Card from '../components/card/card.components';
import Modal from '../components/modal/modal.components';
import { useCallback, useEffect, useState } from 'react';
import { setModalImage, toggleMoal } from '../store/global-state';
import {useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store';
import { IPhotoModel } from '../models/models';

export default function Home () {

  const isModalOpen = useSelector((state: RootState) => state.modalReducer.isModalVisible);
  const searchedAuthor = useSelector((state: RootState) => state.modalReducer.searchValue);
  const [images, setImages] = useState<IPhotoModel[]>([]);
  const dispatch = useDispatch();

  const fetchAllImagesForCurrentLoginUser = useCallback(async () => {
      const controller = new AbortController();
      const response = await fetch("http://localhost:8080/photos/a019cd6b-2385-4f8e-98c5-539b58b93e76", {signal: controller.signal});
      const data = await response.json();
      const photos = (data.body as IPhotoModel[]);

      setImages(photos);
  }, [])

  useEffect(() => {
    fetchAllImagesForCurrentLoginUser();
  }, []);

  function showModal(imageURL: string) {
    dispatch(toggleMoal(isModalOpen));
    dispatch(setModalImage(imageURL));
  }

   function renderImageOrEmptyState(images: IPhotoModel[]) {
    return (
        <>
          {
            images.filter(data => {
              return searchedAuthor === '' ? data : data.author.toLowerCase().includes(searchedAuthor.toLowerCase());
            })?.map((data) => {
              return renderImages(data)
            })
          }
        </>
    )
  }

  function renderImages(data: IPhotoModel) {
    return (  
        <Card published={data.published} key={data.id}>
          <div className='over-lay' onClick={() => showModal(data.highResolutionURL)}>
            <p>By: <span>{data.author}</span></p> 
          </div>
          <img src={data.lowResolutionURL} alt=''/>
      </Card>
    )
  }

  return (
    <>
      {isModalOpen && <Modal/>}
      <Navigation></Navigation>
      <div className='main'>
        { images == null ? <div>No images have been uploaded</div> : renderImageOrEmptyState(images) }
      </div>
    </>
  )
}