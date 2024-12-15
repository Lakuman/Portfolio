<template>
  <div class="parent contact-card flex-col">
    <h2>Contact me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <Button 
        type="submit"
        buttonClass="custom-btn"
      >
        Send
      </Button>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import Button from "@/components/library/Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const templateParams = {
          from_name: this.name,
          from_email: this.email,
          message: this.message,
        };

        // Remplacez par vos identifiants EmailJS
        const response = await emailjs.send(
          "service_17whklq",    // Remplacez par votre Service ID
          "template_pv6pnwc",   // Remplacez par votre Template ID
          templateParams,
          "_-Mztbkv_TFOmU6AZ"     // Remplacez par votre clé publique
        );

        if (response.status === 200) {
          alert("Email sent successfully!");
          this.resetForm();
        } else {
          throw new Error("Failed to send email.");
        }
      } catch (error) {
        alert("An error occurred while sending the email. Please try again.");
        console.error(error);
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact-card {
  z-index: 2;
  border: 2px solid #0C3D3A;
  border-radius: 20px;
  background-color: #051D1F;
  width: 57%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: white;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #a3c2c2;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  background-color: #0d2d2f;
  color: white;
  border: 1px solid #4c696e;
  border-radius: 8px;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #0C3D3A;
}

textarea {
  min-height: 120px;
}

.custom-btn {
  margin-top: 20px;
  width: 100%;
}
</style>
