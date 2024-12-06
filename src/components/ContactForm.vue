<template>
    <div class="contact-form">
      <h2>Contact us</h2>
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
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    methods: {
      submitForm() {
        alert(`Message envoyé par ${this.name}`);
        // Ajoutez ici l’envoi du formulaire, par exemple avec une requête API.
        this.name = "";
        this.email = "";
        this.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: #275157;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    text-align: center;
    font-family: 'Press Start 2P', cursive;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #4b6cb7;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Press Start 2P', cursive;
  }
  
  button:hover {
    background-color: #3a55a4;
  }
  </style>