import React from 'react'
import CollectionItem from '../collection-items/collection-item.component'
import './collection-preview.styles.scss'

const collection_preview = ({id, title, items,   }) => {
    return (
        <div className = "collection-preview">
            <h1 className = "title"> {title.toUpperCase()} </h1>
            <div className = "preview">
            { items.filter((item, id) => id < 4 ).map(({item, ...otherCollectionProps})  => {
                return (
                   <CollectionItem key = {id} {...otherCollectionProps}/>
                )
            })} 
            </div>
         
          
            
        </div>
    )
}

export default collection_preview
