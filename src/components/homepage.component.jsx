import React from 'react'
import './homepage.styles.scss'

function homepage() {
    return (
        <div className = "homepage">
            <div className = "directory-menu">

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title"> Hats</h1>
                        <span className = "subtitle">Shoop Now</span>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title"> Pants</h1>
                        <div className = "subtitle">Shoop Now</div>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title"> Sweeter</h1>
                        <div className = "subtitle">Shoop Now</div>
                    </div>
                </div>
                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title"> Jacket</h1>
                        <div className = "subtitle">Shoop Now</div>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title"> Shirts </h1>
                        <div className = "subtitle">Shoop Now</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default homepage;
