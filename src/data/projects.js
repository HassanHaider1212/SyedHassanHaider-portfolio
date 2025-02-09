// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Warehouse Management System',
		date: 'November 27, 2024 - January 31, 2025',
		category: 'Web Application',
		companyName: '#',
		img: require('@/assets/images/WMS-project.jpg'),
		website: '#',
		phone: '#',
		objectivesDetails: 'Designed and implemented a Warehouse Management System to streamline inventory tracking, automate order fulfillment, and enhance operational efficiency. The system ensures accurate stock management, optimized warehouse workflows, and seamless order processing.',
		techs: ['React', 'Tailwind CSS', 'ASP.NET Core', 'SQL Server', 'RESTful APIs'],
		projectDetails: `<i>Engineered a scalable Warehouse Management System to:</i>\n
			- Enhance inventory control 📦
			- Automate order fulfillment 🚀
			- Optimize warehouse workflows for accuracy & efficiency ✅\n
			<i>Key Processes & Steps:</i>\n
			- User Access Control (UAC): Role-based access for secure module management 🔐
			- Purchase Orders (PO): Order creation, approval, and tracking from vendors 📝
			- Goods Receipt: Verification and recording of received stock 📥
			- Putaway Process: Storing received goods in designated warehouse locations 🏬
			- Inventory Management: Real-time tracking of stock across bins, pallets, and zones 📊
			- Sales Orders: Managing customer orders, payments, and fulfillment 🛒
			- Picking & Packing: Order picking from inventory and packing for dispatch 📦
			- Shipping & Dispatch: Managing outbound shipments and tracking deliveries 🚚
			- Stock Movements: Logging inbound and outbound stock transfers for inventory accuracy 🔄`,
		videoUrl: require("@/assets/videos/WMS_Workflow_Demo.mp4")
	},
	{
		id: 2,
		title: 'Diamond Paint – Work in Process (WIP) Application',
		category: 'Desktop Application',
		companyName: '#',
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
		companyName: '#',
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
		companyName: '#',
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
		companyName: '#',
		img: require('@/assets/images/real-estate.jpg'),
		website: 'Real Estate Platform',
		phone: '555 4444 444',
		objectivesDetails: 'Developed a real estate website that connects buyers with sellers and tenants with landlords for a highly user-friendly experience.',
		techs: ['ASP.NET Core', 'SQL Server', 'JavaScript'],
		projectDetails: 'Implemented SQL database for efficient data management and ASP.NET Core for robust backend operations.'
	}
];

export default projects;
