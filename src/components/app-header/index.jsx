import { Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'


export const AppHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Post
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}