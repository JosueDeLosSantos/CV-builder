import { v4 as uuid } from "uuid"

export const personalInfo = {
	fullName: "Francisco Martinez",
	email: "franciscom@hotmail.com",
	ph: "1 809 433 4578",
	location: "Santo Domingo, DO",
}

export const education = [
	{
		id: uuid(),
		school: "MESCYT",
		degree: "Advanced english",
		startDate: "2015-01",
		endDate: "2015-12",
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
		companyName: "English Institute",
		positionTitle: "English Teacher",
		startDate: "2012-06",
		endDate: "2014-12",
		location: "Santo Domingo, DO",
		description:
			"Lorem Ipsum is sihe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
	},
	{
		id: uuid(),
		companyName: "New Tech",
		positionTitle: "Customer Service Representative",
		startDate: "2015-06",
		endDate: "2016-12",
		location: "Santo Domingo, DO",
		description:
			"I was in charge of delivering service over the phone to customers from the United States of America.",
	},
]
