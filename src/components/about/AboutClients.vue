<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the companies I have worked with',
			clients: [
				{
					id: 1,
					title: 'CureMD',
					img: require('@/assets/images/brands/cureMD.png'),
					website: 'https://www.curemd.com/',
				},
				{
					id: 2,
					title: 'Emergtech Pvt Ltd.',
					img: require('@/assets/images/brands/emegTechPvtLtd.jpeg'),
					website: 'https://emergtechsolutions.com/',
				},
				{
					id: 3,
					title: 'Caregenix Solutions',
					img: require('@/assets/images/brands/caregenixSolutions.jpeg'),
					website: 'https://caregenixsolutions.com/',
				},
				// {
				// 	id: 2,
				// 	title: 'Sony',
				// 	img: require('@/assets/images/brands/sony_gray.png'),
				// },
				// {
				// 	id: 3,
				// 	title: 'Adidas',
				// 	img: require('@/assets/images/brands/adidas_gray.png'),
				// },
				// {
				// 	id: 4,
				// 	title: 'FILA',
				// 	img: require('@/assets/images/brands/fila_gray.png'),
				// },
				// {
				// 	id: 5,
				// 	title: 'NB',
				// 	img: require('@/assets/images/brands/nb_gray.png'),
				// },
				// {
				// 	id: 6,
				// 	title: 'SAMSUNG',
				// 	img: require('@/assets/images/brands/samsung_gray.png'),
				// },
				// {
				// 	id: 7,
				// 	title: 'CANON',
				// 	img: require('@/assets/images/brands/canon_gray.png'),
				// },
				// {
				// 	id: 7,
				// 	title: 'PUMA',
				// 	img: require('@/assets/images/brands/puma_gray.png'),
				// },
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
