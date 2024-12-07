<template>
  <div class="icon-with-text">
    <a :href="link" target="_blank" rel="noopener noreferrer" class="icon-link">
      <img class="icon" :src="icon"/>
    </a>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "ClickableIcon",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.icon-with-text {
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #B3D4C5;
}

.icon-link {
  text-decoration: none;
}

.icon {
  width: 42px; /* Taille de l'icône */
  color: #B3D4C5;
}

.text {
  margin-top: 0.5rem;
  font-size: rem;
  color: #B3D4C5;
  text-align: center;
}
</style>
