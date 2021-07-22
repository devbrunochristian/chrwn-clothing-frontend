import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        marginBottom: 10,
        backgroundColor: 'white',
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    appbar: {
        backgroundColor: 'white',
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        color: '#4a4a4a',
        '& span': {
            fontSize: 16,
            margin: 10,
            cursor: 'pointer',
            '&:hover': {
                color: 'black',
            },
        },
        '& a': {
            color: '#4a4a4a',
            cursor: 'pointer',
            textDecoration: 'none',
            textTransform: 'none',
            margin: 10,
            fontSize: 16,
            '&:hover': {
                color: 'black',
            },
        },
    },
})

export default useStyles
