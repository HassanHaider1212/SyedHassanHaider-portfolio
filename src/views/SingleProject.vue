<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects'; // Import the projects data

export default {
	name: 'SingleProject',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	props: {
		projectId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			project: null, // Store the selected project
			singleProjectHeader: {},
			projectImages: [],
			projectInfo: {},
			relatedProject: {},
		};
	},
	created() {
		console.log('Project ID from route:', this.projectId); // Debugging
		this.fetchProjectDetails();
	},
	methods: {
		fetchProjectDetails() {
			// Find the project by ID
			this.project = projects.find(
				(project) => project.id === parseInt(this.projectId)
			);

			console.log('Selected Project:', this.project); // Debugging

			if (this.project) {
				// Update the component data based on the project
				this.singleProjectHeader = {
					singleProjectTitle: this.project.title,
					singleProjectDate: this.project.date, // Replace with actual date if available
					singleProjectTag: this.project.category,
				};

				this.projectImages = [
					{
						id: 1,
						title: this.project.title,
						img: this.project.img,
					},
					// Add more images if available
				];

				this.projectInfo = {
					clientHeading: 'About Client',
					companyInfos: [
						{
							id: 1,
							title: 'Name',
							details: 'Company Ltd',
						},
						{
							id: 2,
							title: 'Services',
							details: this.project.category,
						},
						{
							id: 3,
							title: 'Website',
							details: this.project.website,
						},
						{
							id: 4,
							title: 'Phone',
							details: this.project.phone,
						},
					],
					objectivesHeading: 'Objective',
					objectivesDetails: this.project.objectivesDetails,
					technologies: [
						{
							title: 'Tools & Technologies',
							techs: this.project.techs,
						},
					],
					projectDetailsHeading: 'Challenge',
					projectDetails: [
						{
							id: 1,
							details: this.project.projectDetails,
            },
					],
					socialSharingsHeading: 'Share This',
					socialSharings: [
						// {
						// 	id: 1,
						// 	name: 'Twitter',
						// 	icon: 'twitter',
						// 	url: 'https://twitter.com/realstoman',
						// },
						{
							id: 2,
							name: 'Instagram',
							icon: 'instagram',
							url: 'https://www.instagram.com/hassanhaider3632/',
						},
					],
				};

				this.relatedProject = {
					relatedProjectsHeading: 'Related Projects',
					relatedProjects: projects
						.filter((p) => p.id !== this.project.id)
						.slice(0, 4), // Show 4 related projects
				};
			} else {
				console.error('Project not found for ID:', this.projectId); // Debugging
			}
		},
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>