import React, { useState } from 'react'
import MenuItem from './Menu-item/Menu-item'
import './styles.scss'

interface ISection {
    title: string
    imageUrl: string
    size?: string
    id: number
}
const Menu = (): React.ReactElement => {
    const [sections] = useState<ISection[]>([
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
        },
        {
            title: 'women',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
        },
        {
            title: 'men',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
        },
    ])

    return (
        <div className="menu">
            {sections.map(({ title, imageUrl, size, id }: ISection) => (
                <MenuItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    size={size}
                    subtitle="SHOP NOW"
                />
            ))}
        </div>
    )
}

export default Menu
