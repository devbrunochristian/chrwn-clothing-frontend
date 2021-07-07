import React, { useState } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import { IShopData } from '../../interfaces/IShopData'
import SHOP_DATA from '../../ShopData'
import './shop-page.styles.scss'

const ShopPage = (): React.ReactElement => {
    const [shopData] = useState(SHOP_DATA)

    return (
        <div className="shoppage">
            {shopData.map((data: IShopData) => (
                <PreviewCollection key={data.id} {...data} />
            ))}
        </div>
    )
}

export default ShopPage
