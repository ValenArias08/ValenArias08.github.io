import React from 'react';
import GaleryBox from './GaleryBox';
import GuerreroAncestralPixel from '../images/Guerrero_ancestral_pixel.png';
import EnemigoAncestralPixel from '../images/Enemigo_ancestral_pixel.png';
import ArbolDorado1Pixel from '../images/Arbol_dorado_1_pixel.png';
import ArbolDorado2Pixel from '../images/Arbol_dorado_2_pixel.png';
import ArbolDorado3Pixel from '../images/Arbol_dorado_3_pixel.png';
import ArbustoPixel from '../images/Arbusto_pixel.png';
import BannerLivePixel from '../images/Banner_live_pixel.png';
import CasaDoradaPixel from '../images/Casa_dorada_pixel.png';
import FondoAlienigenaPixel from '../images/Fondo_alienigena_pixel.png';
import MarcianoAlienigenaPixel from '../images/Maricano_alienigena_pixel.png';
import SpritesTierraPixel from '../images/Sprites_tierra_pixel.png';
import VidaMarcianaPixel from '../images/Vida_marciana_pixel.png';
import BrokenDimensionPixel from '../images/Broken_dimension_pixel.png';
import BrokenDimensionNightPixel from '../images/Broken_dimension_night_pixel.png';
import BrokenDimensionPixelAnimation from '../images/Broken_dimension_animation_pixel.gif';
import MarcianoAlienigenaAnimation1Pixel from '../images/Marciano_alienigena_animation_1_pixel.gif';
import MarcianoAlienigenaAnimation2Pixel from '../images/Marciano_alienigena_animation_2_pixel.gif';
import MarcianoAlienigenaAnimation3Pixel from '../images/Marciano_alienigena_animation_3_pixel.gif';
import MarcianoAlienigenaAnimation4Pixel from '../images/Marciano_alienigena_animation_4_pixel.gif';
import GuerreroAncestralAnimation1Pixel from '../images/Guerrero_ancestral_animation_1_pixel.gif';
import GuerreroAncestralAnimation2Pixel from '../images/Guerrero_ancestral_animation_2_pixel.gif';
import GuerreroAncestralAnimation3Pixel from '../images/Guerrero_ancestral_animation_3_pixel.gif';
import GuerreroAncestralAnimation4Pixel from '../images/Guerrero_ancestral_animation_4_pixel.gif';
import GuerreroAncestralAnimation5Pixel from '../images/Guerrero_ancestral_animation_5_pixel.gif';
import JefeAncestralAnimation1Pixel from '../images/Jefe_ancestral_animation_1_pixel.gif';
import JefeAncestralAnimation2Pixel from '../images/Jefe_ancestral_animation_2_pixel.gif';
import JefeAncestralAnimation3Pixel from '../images/Jefe_ancestral_animation_3_pixel.gif';
import JefeAncestralAnimation4Pixel from '../images/Jefe_ancestral_animation_4_pixel.gif';

const Galery = () => {
    return(
        <div>
            <h1 className='projectHeading'>Mis <b>Pixels</b></h1>
            <h2 className='subProjects'>Dise<b>ños</b></h2>

            <div className='project'>
                <GaleryBox galeryPhoto={BrokenDimensionPixel} photoName="BrokenDimensionPixel" />
                <GaleryBox galeryPhoto={BrokenDimensionNightPixel} photoName="BrokenDimensionNightPixel" />
                <GaleryBox galeryPhoto={GuerreroAncestralPixel} photoName="GuerreroAncestralPixel" />
                <GaleryBox galeryPhoto={EnemigoAncestralPixel} photoName="EnemigoAncestralPixel" />
                <GaleryBox galeryPhoto={MarcianoAlienigenaPixel} photoName="MarcianoAlienigenaPixel" />
                <GaleryBox galeryPhoto={ArbolDorado1Pixel} photoName="ArbolDorado1Pixel" />
                <GaleryBox galeryPhoto={ArbolDorado2Pixel} photoName="ArbolDorado2Pixel" />
                <GaleryBox galeryPhoto={ArbolDorado3Pixel} photoName="ArbolDorado3Pixel" />
                <GaleryBox galeryPhoto={CasaDoradaPixel} photoName="CasaDoradaPixel" />
                <GaleryBox galeryPhoto={ArbustoPixel} photoName="ArbustoPixel" />
                <GaleryBox galeryPhoto={BannerLivePixel} photoName="BannerLivePixel" />
                <GaleryBox galeryPhoto={FondoAlienigenaPixel} photoName="FondoAlienigenaPixel" />
                <GaleryBox galeryPhoto={SpritesTierraPixel} photoName="SpritesTierraPixel" />
                <GaleryBox galeryPhoto={VidaMarcianaPixel} photoName="VidaMarcianaPixel" />
            </div>

            <h2 className='subProjects'>Animaci<b>ones</b></h2>
            <div className='project'>
                <GaleryBox galeryPhoto={BrokenDimensionPixelAnimation} photoName="BrokenDimensionPixelAnimation" />
                <GaleryBox galeryPhoto={MarcianoAlienigenaAnimation1Pixel} photoName="MarcianoAlienigenaAnimation1Pixel" />
                <GaleryBox galeryPhoto={MarcianoAlienigenaAnimation2Pixel} photoName="MarcianoAlienigenaAnimation2Pixel" />
                <GaleryBox galeryPhoto={MarcianoAlienigenaAnimation3Pixel} photoName="MarcianoAlienigenaAnimation3Pixel" />
                <GaleryBox galeryPhoto={MarcianoAlienigenaAnimation4Pixel} photoName="MarcianoAlienigenaAnimation4Pixel" />
                <GaleryBox galeryPhoto={GuerreroAncestralAnimation1Pixel} photoName="GuerreroAncestralAnimation1Pixel" />
                <GaleryBox galeryPhoto={GuerreroAncestralAnimation2Pixel} photoName="GuerreroAncestralAnimation2Pixel" />
                <GaleryBox galeryPhoto={GuerreroAncestralAnimation3Pixel} photoName="GuerreroAncestralAnimation3Pixel" />
                <GaleryBox galeryPhoto={GuerreroAncestralAnimation4Pixel} photoName="GuerreroAncestralAnimation4Pixel" />
                <GaleryBox galeryPhoto={GuerreroAncestralAnimation5Pixel} photoName="GuerreroAncestralAnimation5Pixel" />
                <GaleryBox galeryPhoto={JefeAncestralAnimation1Pixel} photoName="JefeAncestralAnimation1Pixel" />
                <GaleryBox galeryPhoto={JefeAncestralAnimation2Pixel} photoName="JefeAncestralAnimation2Pixel" />
                <GaleryBox galeryPhoto={JefeAncestralAnimation3Pixel} photoName="JefeAncestralAnimation3Pixel" />
                <GaleryBox galeryPhoto={JefeAncestralAnimation4Pixel} photoName="JefeAncestralAnimation4Pixel" />
            
            </div>
        </div>
    )

}

export default Galery