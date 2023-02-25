import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function SkillSet(props) {

    return (
        <Card sx={{ minWidth: 275, maxWidth: 345, height: 250 }} className="m-5" >
            <CardContent>
                <Typography sx={{ fontSize: 26 }} className="bg-black text-white text-center" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="body2" className="text-center">
                    <ul>
                        {props.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}