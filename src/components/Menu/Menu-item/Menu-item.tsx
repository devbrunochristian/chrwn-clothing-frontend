import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'

interface Props {
    title: string
    subtitle: string
    size?: string
    imageUrl: string
    linkUrl: string
}

const MenuItem: React.FunctionComponent<Props> = (props) => {
    const { title, subtitle, size, imageUrl, linkUrl } = props
    const history = useHistory()

    const handleNavigate = (): void => history.push(linkUrl)
    return (
        <div
            className={`${size} menu-item`}
            onClick={handleNavigate}
            onKeyDown={handleNavigate}
        >
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
