import React, { Component } from 'react'
import "./directory-menu.styles.scss";
import { sections } from './directoryState'
import MenuItem from '../menuItem/menu-item.component'

export class directory extends Component {

    state = {
        sections: sections
    }

    render() {
        return (
            <div className = "directory-menu">
              {this.state.sections.map(({title, id, imageUrl, size }) => {
                  return (
                      <MenuItem title = {title} key = {id} imageUrl = {imageUrl} size= {size}/>
                  )
              })}
                
            </div>
        )
    }
}

export default directory




