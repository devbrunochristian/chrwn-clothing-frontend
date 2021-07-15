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
        '& a': {
            color: '#4a4a4a',
            cursor: 'pointer',
            textDecoration: 'none',
            margin: 10,
            fontSize: 16,
            '&:hover': {
                color: 'black',
            },
        },
    },
})

export default useStyles
