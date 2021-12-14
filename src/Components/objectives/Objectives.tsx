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

const useObjectivesApi = () => {
    const { setGlobalState } = useContext(GlobalContext);

    const getObjectivesApi = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8080/categories');

            if (response.status === 200) {
                console.log(response.data);
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

const useGuidesApi = () => {
    const { setGlobalState } = useContext(GlobalContext);

    const getGuidesApi = useCallback(async (category: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/${category}/guides`);

            if (response.status === 200) {
                console.log(response.data);
                setGlobalState({
                    guides: response.data
                })
            }
        } catch (err) {
            console.error(err);
        }
    }, [setGlobalState]);

    return { getGuidesApi }
}

const Objectives = () => {
    const { globalState } = useContext(GlobalContext);
    const { getObjectivesApi } = useObjectivesApi();
    const { getGuidesApi } = useGuidesApi();

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
                    <Button size="small" color="primary" onClick={() => getGuidesApi(objective.type)}>
                        Open
                    </Button>
                </CardActions>
            </Card>
        )

    }

    return Object.values(objectives).map(objectiveList => {
        console.log(objectiveList);
        return objectiveList.map((objectiveListItem, index) => renderCard(index, objectiveListItem))
    })

}

export default Objectives;
