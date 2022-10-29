import { ReactNode } from "react";
import { Box } from "@mui/system";
import {
    Icon,
    IconButton,
    Theme,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useDrawerContext } from "../hooks";

interface LayoutBaseProp {
    title: string;
    toolbar?: ReactNode;
    children: ReactNode;
}

export const LayoutBase: React.FC<LayoutBaseProp> = ({ title, toolbar, children }) => {
    const smDown = useMediaQuery((t: Theme) => t.breakpoints.down("sm"));
    const mdDown = useMediaQuery((t: Theme) => t.breakpoints.down("md"));
    const theme = useTheme();

    const { toggleOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box
                padding={1}
                display="flex"
                alignItems="center"
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
                gap={1}
            >
                {smDown && (
                    <IconButton onClick={toggleOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography
                    variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {title}
                </Typography>
            </Box>
                {toolbar && (
                    <Box>
                        {toolbar}
                    </Box>
                )}
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};
