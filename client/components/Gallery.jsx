import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import PopUpBox from './PopUpBox'
import Footer from './Footer'
import GalleryNav from './GalleryNav'

const images = [
    { id: 1, thumbnail: "/img/gallery/1-1.webp", fullSize: "/img/gallery/1-2.webp" },
    { id: 2, thumbnail: "/img/gallery/2-1.webp" ,fullSize: "/img/gallery/2-2.webp" },
    { id: 3, thumbnail: "/img/gallery/3-1.webp" ,fullSize: "/img/gallery/3-2.webp" },
    { id: 4, thumbnail: "/img/gallery/4-1.webp" ,fullSize: "/img/gallery/4-2.webp" },
    { id: 5, thumbnail: "/img/gallery/5-1.webp" ,fullSize: "/img/gallery/5-2.webp" },
    { id: 6, thumbnail: "/img/gallery/6-1.webp" ,fullSize: "/img/gallery/6-2.webp" },
    { id: 7, thumbnail: "/img/gallery/7-1.webp" ,fullSize: "/img/gallery/7-2.webp" },
]

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          popupImageId: null,
        }
      }
    
      togglePopup(id = null) {
        this.setState((state, props) => ({
          popupImageId: id,
        }))
      }
render() {
    return (
        <React.Fragment>
            <GalleryNav />
            <div className="background">
                <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
                <img src="./img/gallery.png" alt="Gallery logo" id="galleryLogo" className="centerImg"></img>
                <div id="photosArea">
                <div className="pics">
            {images.map((image, index) => {
              return (
                <a
                  key={image.id}
                  className="pic"
                  onClick={() => this.togglePopup(image.id)}
                >
                  <img src={image.thumbnail}></img>
                </a>
              )
            })}
          </div>
                </div>
                <Footer />
            </div>
            {this.state.popupImageId !== null && (
            <PopUpBox
              togglePopup={() => this.togglePopup(null)} 
            >
              <div>
                <img
                  src={
                    images.find(image => image.id === this.state.popupImageId).fullSize
                  }
                  className="popUpPic"
                ></img>
              </div>
            </PopUpBox>
          )}
        </React.Fragment>
          )  
        }
}

export default Gallery