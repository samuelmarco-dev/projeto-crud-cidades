import { Button } from "@mui/material";
import { useThemeContext } from "../../hooks";

export const Home: React.FC = () => {
    const { toggleTheme } = useThemeContext();

    return (
        <Button variant="contained" color="primary" onClick={toggleTheme}>
            Clique aqui
        </Button>
    );
};
