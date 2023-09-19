import { v4 as uuid } from 'uuid';

export const personalInfo = {
	fullName: "John Doe",
	email: "jhondoe@hotmail.com",
	ph: "1 809 433 4578",
	location: "Santo Domingo, DO",
}

export const education = [
    {
        id: uuid(),
        school: "Universidad Del Caribe",
        degree: "Bachelor's Degree in Computer Science",
        startDate: "06/2018",
        endDate: "08/2023",
        location: "Santo Domingo, DO"
    }
]

export const experience = [
    {
        id: uuid(),
        companyName: "English Institue",
        positionTitle: "English Teacher",
        startDate: "06/2012",
        endDate: "12/2014",
        location: "Santo Domingo, DO",
        description: ""
    }
]
