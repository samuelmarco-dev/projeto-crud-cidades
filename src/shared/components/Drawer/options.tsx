import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface OptionsProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

export const Options: React.FC<OptionsProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({
        path: resolvedPath.pathname, end: false
    });

    const handleClick = () => {
        navigate(to);
        onClick && onClick();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};
