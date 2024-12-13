<template>
    <div class="project">
      <div class="flex-col gap-32">
        <div class="title">VR Escape Game : Antarctica Origins</div>
        <div class="flex-col gap-16">
          <div class="flex-col gap-8">
            <span>A VR escape game developed in partnership with Anthony Paccica, Eugénie Vallier, and Nathan Paratt. Antarctica Origins immerses players in a 40-minute adventure exploring a mysterious underground temple in Antarctica, filled with puzzles and terrifying creatures.</span>
            <span>This was my first experience in game development overall, and starting with VR was both challenging and rewarding. Anthony presented us with the idea for a VR game, which immediately resonated with me. After testing the headset, we quickly familiarized ourselves with the development process.</span>
            <span>We soon encountered the technical limitations of the Oculus Android processor. However, with determination and creative problem-solving, we managed to overcome these hurdles and deliver a complete game that was successfully launched on the Oculus VR development platform.</span>
          </div>
          <span style="font-weight: bold;">Role : Lead Developer</span>
        </div>
        <div class="flex gap-32" style="align-items: flex-start; justify-content: flex-start;">
          <div class="flex-col-project" style="max-width:500px; min-height: 350px;">
            <Select
              class="flex-col"
              text="Programmation"
              iconBefore="/images/icons/code-icon.svg"
              :delay="300"
              :index="1"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <span>Integrated VR input systems</span>
                <span>Designed and implemented escape room levels and puzzles</span>
                <span>Programmed AI behavior for enemies</span>
                <span>Integrated 3D/2D animations and special effects</span>
                <span>Implemented immersive environmental storytelling through visual and audio cues</span>
              </div>
            </Select>
            <Select
              class="flex-col"
              text="Sound Design"
              iconBefore="/images/icons/microphone-icon.svg"
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col select-content">
                <div>Integrated interface sounds and environmental sound design</div>
                <div>Integrated UI sound effects and overall sound design</div>
              </div>
            </Select>
            <Select
              class="flex-col"
              text="Skills Acquired"
              iconBefore="/images/icons/pen-icon.svg"
              :delay="300"
              :index="3"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col select-content">
                <div>Mastery of VR development and optimization techniques</div>
                <div>Time and task management for episodic content development</div>
                <div>Creative problem-solving for balancing humor and gameplay mechanics</div>
                <div>Experience integrating narrative-driven mechanics in gameplay</div>
              </div>
            </Select>
          </div>
        <div class="flex pad-top-16 video-container">
          <VideoLoader backgroundImage="/images/AntarcticaOriginsBackground.png" title="Antarctica Origins Trailer" videoUrl="antarctica_origins.mp4" />
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
import VideoLoader from '@/components/VideoLoader.vue';
import Select from "@/components/library/Select.vue";
export default {
    components: {
      // eslint-disable-next-line vue/no-reserved-component-names
      Select,
      VideoLoader,
    },
  data() {
    return {
      activeIndex: 1, // Index de la ligne active
    };
  },
  methods: {
    updateActiveIndex(index) {
      this.activeIndex = index; // Met à jour l'index actif
    },
  },
};
</script>

<style scoped>
  .video-container {
    display: flex;
    flex-grow: 1; /* Prend tout l'espace restant */
    max-width: 570px; /* Limite la largeur à 100% */
    justify-content: center; /* Centrer le contenu si nécessaire */
    align-items: center; /* Centrer verticalement le contenu */
  }
  .flex-col-project {
    display: flex !important;
    flex-direction: column !important;
  }
</style>
