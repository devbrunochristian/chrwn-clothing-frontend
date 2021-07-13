import React from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './menu-item.styles'

interface Props {
    title: string
    subtitle: string
    size?: string
    imageUrl: string
    linkUrl: string
}

const MenuItem: React.FunctionComponent<Props> = (props) => {
    const { title, subtitle, imageUrl, linkUrl } = props
    const history = useHistory()
    const { root, backgroundImage, content, contentTitle, contentSubtitle } =
        useStyles()
    const handleNavigate = (): void => history.push(linkUrl)
    return (
        <div
            className={root}
            onClick={handleNavigate}
            onKeyDown={handleNavigate}
        >
            <div
                className={backgroundImage}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className={content}>
                <div className={contentTitle}>{title.toUpperCase()}</div>
                <div className={contentSubtitle}>{subtitle}</div>
            </div>
        </div>
    )
}

export default MenuItem
