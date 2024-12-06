<template>
  <div class="hover-video flex-col" @mouseenter="playVideo">
    <!-- Titre paramétrable -->
    <h2 v-if="title" class="video-title">{{ title }}</h2>
    <!-- Vidéo locale -->
    <video 
      ref="videoRef" 
      :src="`/videos/${videoUrl}`" 
      class="video-element" 
      muted 
      loop 
      playsinline
    ></video>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props pour configurer la vidéo et le titre
defineProps({
  videoUrl: {
    type: String,
    required: true, // Chemin de la vidéo (dans le dossier public/videos)
  },
  title: {
    type: String,
    required: false, // Titre au-dessus de la vidéo
    default: '', // Par défaut, aucun titre
  },
});

const videoRef = ref(null); // Référence à l'élément vidéo

// Méthode pour jouer la vidéo
const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
    // Fixe l'opacité de la vidéo à 1 pour qu'elle reste affichée
    videoRef.value.style.opacity = "1";
  }
};
</script>

<style scoped>
.hover-video {
  width: 100%; /* Largeur de la zone */
  height: auto; /* Hauteur automatique */
  overflow: hidden;
}

.video-title {
  margin-bottom: 10px; /* Espacement entre le titre et la vidéo */
  font-size: 1.5rem; /* Taille de la police */
  text-align: center; /* Centrage du titre */
  color: #80d6ab; /* Couleur du titre */
}

.video-element {
  width: 100%;
  height: auto;
  object-fit: cover; /* Remplissage sans déformation */
  opacity: 0; /* Initialement masquée */
  transition: opacity 0.3s ease-in-out;
}

.hover-video:hover .video-element {
  opacity: 1; /* La vidéo devient visible au survol */
}

/* Forcer l'opacité une fois jouée */
.video-element.playing {
  opacity: 1 !important;
}
</style>
