import './upload.css';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Navigation from '../navigation/navigation.components';
import { IData } from '../../data/mockdata';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { setModalImage, toggleMoal } from '../../store/global-state';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Modal from '../modal/modal.components';

export default function PhotoUploder() {

    const fetchData = useCallback(async () => {
        const data = await fetch("http://localhost:8080/")
            const imageurl = await data.json()
            setImage(imageurl.image);
    }, []);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])

    const [image, setImage] = useState<string>('');
    const dispatch = useDispatch()
    const isModalOpen = useSelector((state: RootState) => state.modalReducer.isModalVisible);
    const uploadBtnRef = useRef<HTMLInputElement>(null);
    const dropAreaRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<string[]>([]);

    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const files =  event.target.files;
        if (files) {
            savePhoto(files);
            setImages([...images, ...createImageURL(files)]);
            fetchDataFromBackend(files);
        }
    };

    function savePhoto(files: FileList) {
        if (files) { 
            const imageData: IData[] = [];

            for (let imageURL of createImageURL(files)) {
                imageData.push({
                    imageURL: imageURL,
                    author: 'Gideon Girigiri',
                    published: true,
                    width: '19.7',
                    height: '463',
                    type: 'single',
                    images: [],
                })
            }
            
            localStorage.setItem('newImages', JSON.stringify(imageData));
        }
    }
    
    function handleFileUploadClick() {
        uploadBtnRef.current?.click();
    }

    function createImageURL(files: FileList): string [] {
        const imageURLs : string [] = [];

        for (let file of files) {
            imageURLs.push(URL.createObjectURL(file));
        }
        return imageURLs;
    }

    async function fetchDataFromBackend(files: FileList) {
        const form = new FormData()

        for (const file of files) {
            form.append('images[]', file);
        }
        form.append('metadata', JSON.stringify({
            author: "Gideon",
            published: true,
        } as IData))

        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: form
        })
        
    }

    function showModal(imageURL: string) {
        dispatch(toggleMoal(isModalOpen));
        dispatch(setModalImage(imageURL));
    }

    function handleFileUploadOnDrop(event: React.DragEvent<HTMLDivElement>) {
        preventDefaults(event);
        const files = event.dataTransfer.files
        savePhoto(files);
        
        setImages([...images, ...createImageURL(files)]);
    }

    function preventDefaults(event: React.DragEvent<HTMLDivElement>) {
        event.stopPropagation();
        event.preventDefault();
    }

    return (
        <div className='upload'>
            {isModalOpen && <Modal/>}
            <Navigation></Navigation>
            <div className="photo">
            <div className="drop-area" 
            onDrop={handleFileUploadOnDrop} 
            onDragEnter={preventDefaults}
            onDragOver={preventDefaults}
            onDragLeave={preventDefaults}
            ref={dropAreaRef}>
                <div className="dragarea">
                    <div>
                        <MdAddPhotoAlternate size={40} className="upload-icon" style={{color: 'red'}} />
                    </div>
                    <div>
                    <h4 >Drag and drop photos</h4>
                    </div>
                </div>
                <button onClick={handleFileUploadClick}>Upload</button>
            </div>

            <input type='file' multiple onChange={handleFileUpload} style={{display: 'none'}} ref={uploadBtnRef}/>
            </div>
            <img src={image} alt="" />
            <div className="uploaded-images">
                <div className="image">
                {images.map((imageURL) => <img key={imageURL} src={imageURL} onClick={ () => showModal(imageURL)}/>)}
                </div>
            </div>
            
        </div>
    )
}
