import './gallery.css'

interface IProps {
    images: string[]
}

export default function Gallery({images}: IProps) { 
    return (
        <div className='gallery'>
            <div className='over-lay'>
                <p>By: <span>Akira Toriko</span> </p>
            </div>
            <div className='top'>
                <div className='pieces'>
                    <img src={images[0]} alt='' style={{boxShadow: 'none'}} />
                </div>
                <div className='pieces'>
                    <img src={images[1]} alt='' style={{boxShadow: 'none'}} />
                </div>
            </div>
            <div className='bottom'>
                <div className='pieces'>
                    <img src={images[2]} alt='' style={{boxShadow: 'none'}} />
                </div>
                <div className='pieces'>
                    <img src={images[3]} alt='' style={{boxShadow: 'none'}} />
                </div>
            </div>
        </div>
    )
}