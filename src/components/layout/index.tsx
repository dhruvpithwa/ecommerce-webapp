
import { Key, MouseEvent, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppBar, Box, CssBaseline, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, SvgIconTypeMap, Toolbar, Typography } from '@mui/material';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Menu as MenuIcon, ViewInArOutlined as ViewInArOutlinedIcon } from '@mui/icons-material';

import { CompanyLogo } from '../elements/avatar';
import { ProductSearch } from '../productList/search';
import { MiniCart } from '../cart/miniCart';
import { getTranslation } from '@/utils/translations';

type PageType = {
    key: Key;
    label: string;
    path: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const drawerWidth = 115;

const AppLayout = (props: { children: ReactNode}) => {
    const router = useRouter();
    const initPages: PageType[] = [];
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [pages, setPages] = useState(initPages);
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        setPages([
            {
                key: "products",
                label: "Products",
                path: "/product-list/electronics",
                Icon: ViewInArOutlinedIcon
            }
        ])
    }, []);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const navigate = (e: MouseEvent, page: string) => {
        setCurrentPage(page);
        router.push(`/${page}`);
    }

    const drawer = (
        <>
            <Toolbar>
                <Grid container alignItems="center" sx={{ m: "16px auto" }}>
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        <CompanyLogo label={getTranslation('companyName')} />
                    </Grid>
                </Grid>
            </Toolbar>
            <List sx={{ p: 0 }}>
                {pages.map(({ label, key, path, Icon }: PageType) => (
                    <ListItem key={key} disablePadding sx={{ bgcolor: "#233165"  }} >
                        <ListItemButton onClick={(e: MouseEvent) => navigate(e, path)}>
                            <ListItemText
                                primary={
                                    <Icon sx={{ color: "#FFFFFF" }} />
                                }
                                secondary={
                                    <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                                        {label}
                                    </Typography>
                                }
                                sx={{ textAlign: "center" }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "#334685",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <Grid container alignItems={"center"} sx={{ m: "19px auto" }}>
                        <Grid item xs={1} md={1} sx={{ display: { sm: 'none' } }}>
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8} md={4}>
                            <ProductSearch />
                        </Grid>
                        <Grid item md={7}>
                            &nbsp;
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <MiniCart />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { border: "none", width: drawerWidth, bgcolor: "#334685" },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { border: "none", width: drawerWidth, bgcolor: "#334685" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

export default AppLayout;