import { Delete as DeleteIcon, RestoreFromTrash as RestoreFromTrashIcon } from '@mui/icons-material';
import { Button, Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { postData } from '../../postData';
import { AppHeader } from '../app-header';
import { PostList } from '../post-list';

const titleGlobalStyles = <GlobalStyles styles={{ h1: { color: 'grey' } }} />



export const AppMui = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <AppHeader />
                <PostList posts={postData} />
            </Container>
        </>
    )

}