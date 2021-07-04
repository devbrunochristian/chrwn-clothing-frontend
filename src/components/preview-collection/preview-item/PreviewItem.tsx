import React from 'react'
import { IShopItem } from '../../../interfaces/IShopItem'
import './styles.scss'

const PreviewItem: React.FunctionComponent<IShopItem> = ({
    name,
    price,
    imageUrl,
}) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)

export default PreviewItem
