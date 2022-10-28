import {
    Avatar,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import Image from "../../../images/paisagem.jpg";
import { useDrawerContext } from "../../hooks";

interface Children {
    children: ReactNode;
}

export const MenuDrawer: React.FC<Children> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const { open, toggleOpen } = useDrawerContext();

    return (
        <>
            <Drawer
                open={open}
                variant={smDown ? "temporary" : "permanent"}
                onClose={toggleOpen}
            >
                <Box
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar
                            sx={{
                                width: theme.spacing(12),
                                height: theme.spacing(12),
                            }}
                            alt="Profile"
                            src={Image}
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};
