import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Page, Document } from '@react-pdf/renderer';
import JResume from '../../static/pdf/resume.pdf'

export default function Resume() {

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            dark: {
                main: '#000000',
                contrastText: '#fff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="bg-white rounded-lg drop-shadow-lg w-3/4 h-3/4">
                <div className="flex flex-col items-center justify-center p-12">
                    <h2>Resume</h2>
                    <Document file={JResume}>
                        <Page pageNumber={1} />
                    </Document>
                    <Button color="dark" variant="contained" size="medium">Download</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}