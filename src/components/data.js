import { v4 as uuid } from "uuid"

export const personalInfo = {
	fullName: "John Doe",
	email: "jhondoe@hotmail.com",
	ph: "1 809 433 4578",
	location: "Santo Domingo, DO",
}

export const education = [
	{
		id: uuid(),
		school: "Ministerio de Educacion Superior, Ciencia y Tecnología",
		degree: "Advanced english",
		startDate: "01/2015",
		endDate: "12/2015",
		location: "Santo Domingo, DO",
	},
	{
		id: uuid(),
		school: "Universidad Del Caribe",
		degree: "Bachelor's Degree in Computer Science",
		startDate: "06/2018",
		endDate: "08/2023",
		location: "Santo Domingo, DO",
	},
]

export const experience = [
	{
		id: uuid(),
		companyName: "English Institue",
		positionTitle: "English Teacher",
		startDate: "06/2012",
		endDate: "12/2014",
		location: "Santo Domingo, DO",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
]
