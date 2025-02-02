<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a highly motivated software engineer with a strong background in developing both desktop and web applications. My expertise lies in ASP.NET Core development, front-end technologies like React, and robust database management with SQL. With a keen eye for detail and a passion for problem-solving, I thrive in collaborative environments where I can contribute to innovative solutions that drive business success. I am eager to continue growing my skills and making meaningful contributions to the tech industry.'
				},
				{
					id: 2,
					bio:
						'Aspiring to advance in a dynamic and reputable organization where I can leverage my software engineering skills to drive innovation and enhance productivity. I am committed to delivering high-quality solutions with a strategic focus on optimizing processes and contributing to the organization\'s growth.'
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profilePicture.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
