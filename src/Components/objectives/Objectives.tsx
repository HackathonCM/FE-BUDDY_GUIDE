/* eslint-disable import/first */
import { useCallback, useContext, useEffect } from 'react';;
import { mapResponseToOjectives, Objective, response } from "./helpers"
import { GlobalContext } from '../../Context/global';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useNavigate, useLocation } from 'react-router-dom';

const useObjectivesApi = () => {
    const { setGlobalState } = useContext(GlobalContext);

    const getObjectivesApi = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8080/categories');

            if (response.status === 200) {
                setGlobalState({
                    objectives: response.data
                })
            }
        } catch (err) {
            console.error(err);
        }
    }, [setGlobalState]);

    return { getObjectivesApi }
}

const Objectives = () => {
    const { globalState } = useContext(GlobalContext);
    const { getObjectivesApi } = useObjectivesApi();

    const navigate = useNavigate();
    const location = useLocation();


    // componentDidMount
    useEffect(() => {
        getObjectivesApi();
    }, []);


    // @ts-ignore
    const objectives: Objective = globalState?.objectives?.length ? mapResponseToOjectives(globalState.objectives) : [] as Objective;

    // const objectives: Objective = mapResponseToOjectives(["RELIGION", "ENTERTAINMENT", "CULTURAL", "RESTAURANTS", "PARKS", "PARTY"]);

    const renderCard = (key: number, objective: {
        type: response,
        name: string;
        description: string;
        imageUrl: string;
    }) => {
        return (
            <Card key={key} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={objective.imageUrl}
                        alt={objective.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {objective.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {objective.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => {
                        if (location.pathname === "/user") {
                            navigate(`/user/${objective.type.toLowerCase()}/guides`);
                        }
                        else if (location.pathname === "/guide") {
                            navigate(`/guide/${objective.type.toLowerCase()}/guides`);
                        }

                    }}>
                        Open
                    </Button>
                </CardActions>
            </Card>
        )

    }

    return Object.values(objectives).map(objectiveList => {
        return objectiveList.map((objectiveListItem, index) => renderCard(index, objectiveListItem))
    })

}

export default Objectives;
