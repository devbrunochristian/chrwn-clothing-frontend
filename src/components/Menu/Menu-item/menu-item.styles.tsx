import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '240px',
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        margin: '0 7.5px 15px',
        overflow: 'hidden',

        '@media (min-width: 769px)': {
            width: '30%',
            height: '240px',
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            margin: '0 7.5px 15px',
            overflow: 'hidden',
        },

        '&:hover': {
            cursor: 'pointer',

            '& .content': {
                opacity: '0.9',
            },
        },

        '&.large': {
            height: '380px',
        },

        '&:first-child': {
            marginRight: '7.5px',
        },

        '&:last-child': {
            marginLeft: '7.5px',
        },
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
        },
    },
    content: {
        height: '90px',
        padding: '0 25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        backgroundColor: 'white',
        opacity: '0.7',
        position: 'absolute',
    },
    contentTitle: {
        fontWeight: 'bold',
        margin: '0 6px 0',
        fontSize: '22px',
        color: '#4a4a4a',
    },

    contentSubtitle: {
        fontWeight: 'lighter',
        fontSize: '16px',
    },
})

export default useStyles
