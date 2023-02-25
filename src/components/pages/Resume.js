import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SkillSet from '../pieces/SkillSet'

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

    const frontEnd = [
        'HTML',
        'CSS',
        'JavaScript',
        'JQuery',
        'Bootstrap',
        'Tailwind',
        'Handlebars',
        'React'
    ]

    const backEnd = [
        'Node.js',
        'Express.js',
        'Sequelize',
        'Mongoose/MongoDB',
        'MySQL',
        'GraphQL',
    ]

    return (
        <ThemeProvider theme={theme}>
            <div className="bg-white rounded-lg drop-shadow-lg pt-2 min-h-fit h-3/4 w-3/4 min-w-275">
                <div className="bg-black text-white rounded-t-lg">
                <h2 className="text-center text-4xl">Skill Set</h2>
                </div>
                <hr />
                <div className="flex flex-row flex-wrap items-center justify-center">
                    <SkillSet skills={frontEnd} name="Front-End" />
                    <SkillSet skills={backEnd} name="Back-End" />
                </div>
                <div className="flex justify-center items-center h-36 w-full bottom-0">
                    <Button href='https://drive.google.com/file/d/1RxTOM9QBwDSx0nQMR3rfy-HgsY71082i/view?usp=sharing' target="_blank" color="dark" variant="contained" size="medium">Download Resume</Button>
                    </div>
            </div>
        </ThemeProvider>
    )
}