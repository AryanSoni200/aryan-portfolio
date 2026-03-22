"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => { },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mounted, setMounted] = React.useState(false);

    const [mode, setMode] = React.useState<"light" | "dark">("dark");

    React.useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
        setMounted(true);
    }, [prefersDarkMode]);

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#6366f1",
                    },
                },
            }),
        [mode]
    );

    if (!mounted) return null;

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}