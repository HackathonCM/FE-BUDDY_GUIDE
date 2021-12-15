import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../Context/global';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Guides = () => {
    const { globalState, setGlobalState } = useContext(GlobalContext);
    // setGlobalState({ guides: [] });

    // guide: {
    //     available: boolean,
    //     email: string,
    //     firstName: string,
    //     lastName: string,
    //     price: string,
    //     telephone: string
    // }
    const renderCard = () => {
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }

    return (
        renderCard()
        // globalState?.guides?.map(guide => {
        //     return renderCard(guide);
        // })
    );
}

export default Guides;
