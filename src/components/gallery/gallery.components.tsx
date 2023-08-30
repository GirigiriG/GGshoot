import './gallery.css'

const Gallery = () => { 
    return (
        <div className="gallery">
            <div className="over-lay">
                <p>By: <span>Akira Toriko</span> </p>
            </div>
            <div className="top">
                <div className="pieces">
                    <img src="https://images.unsplash.com/photo-1618553577523-3a5cfb783386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2736&q=80" alt="" style={{boxShadow: 'none'}} />
                </div>
                <div className="pieces">
                    <img src="https://images.unsplash.com/photo-1618799805265-4f27cb61ede9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80" alt="" style={{boxShadow: 'none'}} />
                </div>
            </div>
            <div className="bottom">
                <div className="pieces">
                    <img src="https://images.unsplash.com/photo-1692680887047-357bbef7b16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2583&q=80" alt="" style={{boxShadow: 'none'}} />
                </div>
                <div className="pieces">
                    <img src="https://images.unsplash.com/photo-1665088127661-83aeff6104c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="" style={{boxShadow: 'none'}} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;