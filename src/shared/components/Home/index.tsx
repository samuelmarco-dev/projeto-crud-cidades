import { Button } from "@mui/material";
import { useAppThemeContext } from "../../contexts";

function Home() {
    const { toggleTheme } = useAppThemeContext();


    return (
        <Button variant="contained" color="primary" onClick={ toggleTheme }>Clique aqui</Button>
    );
}

export default Home;
