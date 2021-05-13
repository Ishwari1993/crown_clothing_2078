import React, { Component } from 'react'
import ShopData from '../shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
export class Shop_Page extends Component {
    state = {
        collection: ShopData
    }

    render() {
        const { collection } = this.state
        return (
            <div>
            {collection.map( ({id, ...otherCollectionProps }) =>(
                   <CollectionPreview {...otherCollectionProps} />
            ))}
                
            </div>
        )
    }
}

export default Shop_Page




