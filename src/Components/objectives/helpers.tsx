import catedrala_ortodoxa from "./images/catedrala_ortodoxa.jpg";
import paintball from "./images/paintball.jpg";
import culture from "./images/cultura.jpg";
import party from "./images/party.jpg";

import "./objectives.css";

export enum response {
    RELIGION = "RELIGION",
    ENTERTAINMENT = "ENTERTAINMENT",
    CULTURAL = "CULTURAL",
    PARTY = "PARTY",
}

const values: Objective = {
    [response.RELIGION]:
        [{ type: response.RELIGION, name: "Cathedrals", description: "Catholic Cathedral, Metropolitan Cathedral", imageUrl: catedrala_ortodoxa }],
    [response.ENTERTAINMENT]:
        [{ type: response.ENTERTAINMENT, name: "Entertainment", description: "Adrenaline Park, Paintball Airsoft, WindMill Zoo Park", imageUrl: paintball }],
    [response.CULTURAL]:
        [{ type: response.CULTURAL, name: "Culture", description: "National Theatre, Art Museum, Hungarian Opera", imageUrl: culture }],
    [response.PARTY]:
        [{ type: response.PARTY, name: "Party", description: "Euphoria Music Hall, NOA Club, Piezisa street", imageUrl: party }],
}

export type Objective = Partial<{ [key in response]: { type: response, name: string, description: string, imageUrl: string }[] }>

const isResponse = (key: string): key is response => key in values;

export const mapResponseToOjectives = (responses: string[]): Objective => {
    return responses.reduce((acc, response: string) => {
        if (isResponse(response)) {
            return {
                ...acc,
                [response]: values[response]
            }
        }

        return acc;
    }, {} as Objective)
}
