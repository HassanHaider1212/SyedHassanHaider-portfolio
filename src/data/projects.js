// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Warehouse Management System',
		date: 'Jul 26, 2021',
		category: 'Web Application',
		img: require('@/assets/images/WMS-project.jpg'),
		website: 'WMS Website',
		phone: '555 8888 888',
		objectivesDetails: 'Developed a comprehensive Warehouse Management System using React for the frontend and ASP.NET Core with SQL Server for the backend, optimizing inventory tracking and order management.',
		techs: ['React', 'ASP.NET Core', 'SQL Server', 'RESTful APIs'],
		projectDetails: 'Implemented user-friendly interfaces and efficient RESTful APIs, enhancing operational efficiency and ensuring real-time data synchronization.'
	},
	{
		id: 2,
		title: 'Diamond Paint – Work in Process (WIP) Application',
		category: 'Desktop Application',
		img: require('@/assets/images/diamond-paint.jpg'),
		website: 'Diamond Paint WIP',
		phone: '555 7777 777',
		objectivesDetails: 'Developed the WIP application in ASP.NET WinForms with SQL Server, incorporating robust user access control, production order management, and label printing for goods receive verification.',
		techs: ['ASP.NET WinForms', 'SQL Server', 'QR Code Scanning', 'REST APIs'],
		projectDetails: 'Optimized production order processes, including Item Label Printing (GRN), RM verification, Picking in RMS via HHT for Kitting, Issuance to Production via HHT, Kitting, Weighing, and Verification for production jobs at vessels via Tablet.'
	},
	{
		id: 3,
		title: 'User Access Control',
		category: 'Desktop Application',
		img: require('@/assets/images/uac.jpg'),
		website: 'UAC Application',
		phone: '555 6666 666',
		objectivesDetails: 'Developed a User Access Control desktop application in ASP.NET WinForms with SQL Server, featuring user creation, password management, and role-based permissions.',
		techs: ['ASP.NET WinForms', 'SQL Server', 'Secure Authentication'],
		projectDetails: 'Implemented secure authentication and efficient database interactions to enhance user management and application performance.'
	},
	{
		id: 4,
		title: 'ParkEase - Smart Parking System (FYP)',
		category: 'Desktop Application',
		img: require('@/assets/images/park-ease.jpg'),
		website: 'ParkEase',
		phone: '555 9999 999',
		objectivesDetails: 'Pioneered Smart Parking System with security cameras and computer vision, optimizing real-time occupancy tracking, route planning, and crime detection.',
		techs: ['Computer Vision', 'Python FastAPI', 'Machine Learning'],
		projectDetails: 'Delivered user-friendly solution as a desktop application, enhancing urban parking efficiency.'
	},
	{
		id: 5,
		title: 'Real Estate Website',
		category: 'Web Application',
		img: require('@/assets/images/real-estate.jpg'),
		website: 'Real Estate Platform',
		phone: '555 4444 444',
		objectivesDetails: 'Developed a real estate website that connects buyers with sellers and tenants with landlords for a highly user-friendly experience.',
		techs: ['ASP.NET Core', 'SQL Server', 'JavaScript'],
		projectDetails: 'Implemented SQL database for efficient data management and ASP.NET Core for robust backend operations.'
	}
];

export default projects;
