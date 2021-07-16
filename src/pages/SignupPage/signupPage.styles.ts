import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid whitesmoke',
        borderRadius: '8px',
        padding: '15px',
        margin: 'auto',
        width: '100%',
        backgroundColor: 'white',
        marginTop: '40px',
        '@media(min-width:769px)': {
            width: '600px',
        },
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        display: 'block',
        marginTop: 15,
    },
})

export default useStyles
