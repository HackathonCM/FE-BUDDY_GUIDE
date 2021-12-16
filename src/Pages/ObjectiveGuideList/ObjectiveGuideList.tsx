import React, { useCallback, useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../Context/global';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AvatarIcon from './AvatarIcon';

import "./objectiveGuideList.css";
import Layout from '../../Components/Layout';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';


const useGuidesApi = () => {
    const { setGlobalState } = useContext(GlobalContext);

    const getGuidesApi = useCallback(async (category: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/${category}/guides`);

            console.log('response.data', response.data);

            if (response.status === 200) {

                setGlobalState({
                    guides: response.data
                })
            }
        } catch (err) {
            console.error(err);
        }
    }, []);

    return { getGuidesApi }
}

const ObjectiveGuideList = () => {
    const { globalState } = useContext(GlobalContext);
    const { getGuidesApi } = useGuidesApi();
    let { objectiveName } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    console.log("component render");
    console.log("objectiveName", objectiveName);

    // component did update
    useEffect(() => {
        console.log("inside of useEffect");

        // @ts-ignore
        if (globalState?.guides) return;

        // @ts-ignore
        const objective = globalState?.objectives?.find((objective) => objective.toLowerCase() === objectiveName);

        // console.log('objectiveName', objectiveName);
        // console.log('objective', objective);

        if (objectiveName && objective) {
            getGuidesApi(objectiveName);
        }
        else {
            navigate('/user');
        }

    }, [navigate, getGuidesApi, objectiveName, globalState]);

    useEffect(() => {
        console.log("inside of useEffect2");

        // @ts-ignore
        getGuidesApi(objectiveName);
    }, [objectiveName]);

    const renderCard = (key: number, guide: {
        available: boolean,
        email: string,
        firstName: string,
        lastName: string,
        price: string,
        telephone: string
    }) => {
        const displayBookNow = location.pathname.includes('user');

        return (
            <Card key={key} sx={{ minWidth: 275 }}>
                <CardContent>
                    <AvatarIcon firstName={guide.firstName} lastName={guide.lastName} />
                    <Typography sx={{ fontSize: 30 }} color='#000' >
                        {`${guide.firstName} ${guide.lastName}`}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ marginTop: 10 }}>
                        {guide.telephone}
                    </Typography>
                    <Typography variant="body2">
                        {guide.email}
                    </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="twitter"
                            color="inherit"
                        >
                            <TwitterIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="facebook"
                            color="inherit"
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="instagram"
                            color="inherit"
                        >
                            <InstagramIcon />
                        </IconButton>
                    </div>
                </CardContent>
                {displayBookNow && <CardActions>
                    <Button size="small" disabled={!guide.available}>Book Now</Button>
                </CardActions>}
            </Card>
        )
    }

    // // @ts-ignore
    // console.log('globalState?.guides', globalState?.guides);

    // @ts-ignore
    if (!globalState?.guides) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <Typography variant="h5" component="div" style={{ marginTop: 30, fontWeight: 'bold' }}>
                {`${objectiveName?.toUpperCase()} OBJECTIVES`}
            </Typography>
            {// @ts-ignore
                globalState?.guides?.map((guide, index) => renderCard(index, guide))
            }
        </Layout>
    )
}

export default ObjectiveGuideList;
