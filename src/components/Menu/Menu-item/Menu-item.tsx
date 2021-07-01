import React from 'react'
import './styles.scss'

interface Props {
    title: string
    subtitle: string
    size?: string
    imageUrl: string
}

const MenuItem: React.FunctionComponent<Props> = (props) => {
    const { title, subtitle, size, imageUrl } = props
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
        </div>
    )
}

export default MenuItem
