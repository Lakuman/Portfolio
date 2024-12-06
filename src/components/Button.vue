<template>
    <button
      :class="['btn', buttonClass]"
      :type="type"
      @click="handleClick"
    >
      <span v-if="icon" class="btn-icon">
        <img :src="icon" alt="icon" class="icon" />
      </span>
      <span class="btn-text">
        <slot>Button</slot>
      </span>
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      type: {
        type: String,
        default: "button",
      },
      buttonClass: {
        type: String,
        default: "",
      },
      icon: {
        type: String, // URL de l'icône
        default: null,
      },
    },
    methods: {
      handleClick(event) {
        this.$emit("click", event);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Style de base du bouton */
  .btn {
    background-color: #294b46;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px; /* Espacement entre icône et texte */
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Effet au survol */
  .btn:hover {
    background-color: #3b625b;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  /* Icône */
  .btn-icon img.icon {
    width: 20px;
    height: 20px;
  }
  
  /* Texte du bouton */
  .btn-text {
    line-height: 1.5;
  }
  
  /* Désactivé */
  .btn:disabled {
    background-color: #7a7a7a;
    cursor: not-allowed;
  }
  </style>
  