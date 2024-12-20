<template>
  <div
    class="hover-video flex-col"
    @mouseenter="playVideo"
  >
    <!-- Image de fond -->
    <img
      v-if="backgroundImage"
      :src="backgroundImage"
      alt="Video Background"
      class="video-background"
      ref="backgroundRef"
    />

    <!-- Icône de lecture -->
    <img
      v-if="!isPlaying"
      src="/images/icons/play2.svg"
      alt="Play Icon"
      class="play-icon"
    />

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

// Props pour configurer la vidéo et l'image de fond
defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: false, // L'image de fond est optionnelle
    default: '', // Par défaut, aucune image de fond
  },
});

// Références pour la vidéo et l'image de fond
const videoRef = ref(null);
const backgroundRef = ref(null);
const isPlaying = ref(false); // État pour savoir si la vidéo est en cours de lecture

// Méthode pour jouer la vidéo et masquer l'image
const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
    videoRef.value.classList.add("playing"); // Ajoute une classe pour rendre la vidéo visible
    if (backgroundRef.value) {
      backgroundRef.value.style.opacity = "0"; // Masque l'image de fond
    }
    isPlaying.value = true; // Met à jour l'état de lecture
  }
};
</script>

<style scoped>
.hover-video {
  position: relative;
  display: flex; 
  flex: 1; 
  width: 100%; 
  height: auto;
  min-width: 230px;
  aspect-ratio: 16 / 9; /* Conserve le ratio 16:9 */
  background-color: transparent; /* Couleur de fond */
  border-radius: 20px; /* Bords arrondis */
  overflow: hidden; /* Cache les débordements */
  margin: auto; /* Centrage horizontal */
}
.video-background {
  z-index: 2;
}
.video-element,
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Forcer à remplir tout le conteneur */
  object-fit: cover; /* Remplir le conteneur sans déformer */
  border-radius: 15px; /* Bords arrondis */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5); /* Ombre douce */
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
}

/* La vidéo reste visible une fois jouée */
.video-element.playing {
  opacity: 1;
}

/* Icône de lecture au centre */
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 100px;
  height: 100px;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

/* Icône de lecture masquée lorsque la vidéo est en cours de lecture */
.play-icon.hidden {
  display: none;
}
</style>
