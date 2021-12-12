import catedrala_ortodoxa from "./images/catedrala_ortodoxa.jpg";
import paintball from "./images/paintball.jpg";
import culture from "./images/cultura.jpg";
import party from "./images/party.jpg";

import "./objectives.css";

enum response {
    RELIGION = "RELIGION",
    ENTERTAINMENT = "ENTERTAINMENT",
    CULTURAL = "CULTURAL",
    PARTY = "PARTY",
}

const values: Objective = {
    [response.RELIGION]:
        [{ name: "Catedrale", description: "Description", imageUrl: catedrala_ortodoxa }],
    [response.ENTERTAINMENT]:
        [{ name: "Entertainment", description: "Description Entertainment", imageUrl: paintball }],
    [response.CULTURAL]:
        [{ name: "Culture", description: "Description Culture", imageUrl: culture }],
    [response.PARTY]:
        [{ name: "Party", description: "Description Party", imageUrl: party }],
}

export type Objective = Partial<{ [key in response]: { name: string, description: string, imageUrl: string }[] }>

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
