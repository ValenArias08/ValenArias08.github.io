import React from "react";

const GaleryBox = ({galeryPhoto, photoName}) => {
    const desc = {
        BrokenDimensionPixelTitle:"Personaje",
        BrokenDimensionNightPixelTitle:"Personaje",
        GuerreroAncestralPixelTitle:"Personaje",
        EnemigoAncestralPixelTitle:"Personaje",
        ArbolDorado1PixelTitle:"Sprite",
        ArbolDorado2PixelTitle:"Sprite",
        ArbolDorado3PixelTitle:"Sprite",
        CasaDoradaPixelTitle:"Sprite",
        ArbustoPixelTitle:"Sprite",
        BannerLivePixelTitle:"Sprite",
        FondoAlienigenaPixelTitle:"Sprite fondo",
        SpritesTierraPixelTitle:"Sprite",
        MarcianoAlienigenaPixelTitle:"Personaje",
        VidaMarcianaPixelTitle:"Sprite",
      }
        
      return (
        <div className='projectBox'> 
            <img className='galeryPhoto' src={galeryPhoto} alt="Project display" /> 
            <div>
                <br />
                <h3> {desc[photoName + 'Title']}</h3>
            </div>
        </div>
      )
}

export default GaleryBox