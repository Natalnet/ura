import React, { Component } from 'react';

// Styles
import './wallpaper.scss';

// Media

import Video from "./ura_vinheta.mp4";


export default class Banner extends Component {
    render() {
        return (
            <div className="banner-container">
                

                    

                    <video  autoPlay muted loop className="video-banner">
                        <source src={Video} type="video/mp4" />
                        
                    </video>

                    <div className="text-banner-container">
                        <p className="title-banner">Um Robô por Aluno</p>
                        <p className="text-banner">Uma educação para a inovação!</p>
                    </div>

                    
                    

                    

                
                

                
            </div>
        )
    }
}
