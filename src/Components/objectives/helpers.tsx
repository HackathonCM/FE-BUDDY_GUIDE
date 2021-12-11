import catedrala_ortodoxa from "./images/catedrala_ortodoxa.jpg";
import catedrala_catolica from "./images/catedrala_catolica.jpg";

enum response {
    RELIGION = "RELIGION",
    ENTERTAINMENT = "ENTERTAINMENT",
    CULTURAL = "CULTURAL",
    RESTAURANTS = "RESTAURANTS",
    PARKS = "PARKS"
}

const values: Objective = {
    [response.RELIGION]:
        [{ name: "Catedrala Ortodoxa", description: "Description", imageUrl: catedrala_ortodoxa },
        { name: "Catedrala Catolica", description: "Description Catedrala Catolica", imageUrl: catedrala_catolica }],
    [response.ENTERTAINMENT]:
        [{ name: "Bar", description: "Description Bar", imageUrl: "" },
        { name: "Discoteca", description: "Description Discoteca", imageUrl: "" }]
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
