import React from 'react'
import { IShopData } from '../../interfaces/IShopData'
import PreviewItem from './preview-item/PreviewItem'
import './styles.scss'

const PreviewCollection: React.FunctionComponent<IShopData> = ({
    items,
    title,
}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((data) => (
                    <PreviewItem key={data.id} {...data} />
                ))}
        </div>
    </div>
)

export default PreviewCollection
