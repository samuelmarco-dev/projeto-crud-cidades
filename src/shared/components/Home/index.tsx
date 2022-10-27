import { Button } from "@mui/material";
import { useThemeContext } from "../../hooks";

function Home() {
    const { toggleTheme } = useThemeContext();

    return (
        <Button variant="contained" color="primary" onClick={toggleTheme}>
            Clique aqui
        </Button>
    );
}

export default Home;
