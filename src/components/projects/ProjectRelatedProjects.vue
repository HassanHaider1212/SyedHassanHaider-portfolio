<script>
export default {
	props: ['relatedProject'],
};
</script>

<template>
	<div
		class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
	>
		<p
			class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
		>
			{{ relatedProject.relatedProjectsHeading }}
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
			<div v-for="item in relatedProject.relatedProjects" :key="item.id">
				<!-- <img
					:src="item.img"
					class="rounded-xl cursor-pointer"
					:alt="item.title"
				/>
				<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
				>
					{{item.title}}
				</p> -->

				<router-link
					:to="`/projects/single-project/${item.id}`"
					class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
					aria-label="Single Project"
					target="_blank"
				>
					<div>
						<img
							:src="item.img"
							:alt="item.title"
							class="rounded-t-xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-6">
						<p
							class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
						>
							{{ item.title }}
						</p>
						<span
							class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
							>{{ item.category }}</span
						>
					</div>
				</router-link>
			</div>

		</div>
	</div>
</template>
