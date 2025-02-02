<!-- <script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
export default { components: { Button, FormInput, FormTextarea } };
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Contact Form
			</p>
			<form action="#" class="font-general-regular space-y-7">
				<FormInput label="Full Name" inputIdentifier="name" />
				<FormInput
					label="Email"
					inputIdentifier="email"
					inputType="email"
				/>
				<FormInput label="Subject" inputIdentifier="subject" />
				<FormTextarea label="Message" textareaIdentifier="message" />

				<div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style> -->

<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default {
  components: { Button, FormInput, FormTextarea },
  methods: {
    sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_w41tdm6', 'template_nb84ngb', e.target, 'fftb4M1yCeVaue93q')
        .then((result) => {
          console.log('Email successfully sent!', result.text);
          // Success alert
			Swal.fire({
			icon: 'success',
			title: 'Message Sent!',
			text: 'Your message has been sent successfully.',
			confirmButtonColor: '#6366f1', // Indigo color
			});
        }, (error) => {
          console.error('Failed to send email:', error.text);
          // Error alert
			Swal.fire({
			icon: 'error',
			title: 'Failed to Send',
			text: 'Please try again later.',
			confirmButtonColor: '#6366f1', // Indigo color
			});
        });
    }
  }
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
        Contact Form
      </p>
      <form @submit="sendEmail" class="font-general-regular space-y-7">
        <FormInput label="Full Name" inputIdentifier="name" />
        <FormInput label="Email" inputIdentifier="email" inputType="email" value="syedecommerce5912@gmail.com" readonly  />
        <FormInput label="Subject" inputIdentifier="subject" />
        <FormTextarea label="Message" textareaIdentifier="message" />

        <div>
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>