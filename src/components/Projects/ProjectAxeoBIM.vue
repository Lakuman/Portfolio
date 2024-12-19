<template>
  <div class="project">
    <div class="flex-col gap-32">
      <div class="title">Viewer AxeoBIM</div>
      <div class="flex-col gap-16">
        <div class="flex-col gap-8">
          <span> A 3D model viewer developed at Axxone System. The AxeoBIM viewer is a sophisticated BIM tool allowing users to analyze 3D models in IFC and RVT formats. Built with Unity and integrated into the Web AxeoBIM platform via a JS API.</span>
          <span> When I was hired at Axxone System, I was tasked with creating this 3D viewer entirely from scratch. I faced numerous technical and algorithmic challenges but ultimately delivered the tool on the AxeoBIM platform by the end of 2023, following several years of development. This was my most complex project, and I was fortunate to rely on the support of Marc-Etienne Barrut (Technical Director) and Grégoire Hazette (Software Developer) to bring it to completion.</span>
        </div>
        <span style="font-weight: bold;">Role : Full stack developer</span>
      </div>
      <div class="flex gap-32" style="align-items: flex-start; justify-content: flex-start;">
        <div class="flex-col-project" style="max-width:500px; min-height: 350px;">
          <Select
            class="flex-col"
            text="Features"
            iconBefore="/images/icons/code-icon.svg"
            :delay="300"
            :index="1"
            :activeIndex="activeIndex"
            @update:activeIndex="updateActiveIndex"
          >
            <div class="flex-col">
              <span>Navigation system</span>
              <span>Cutting tools</span>
              <span>Measurement tools</span>
              <span>Parameter management</span>
              <span>Algorithm for 3D model placement</span>
              <span>Integration into an observation module</span>
              <span>Developed an algorithm for 3D object generation</span>
            </div>
          </Select>
          <Select
            class="flex-col"
            text="Skills Acquired"
            iconBefore="/images/icons/pen-icon.svg"
            :delay="300"
            :index="2"
            :activeIndex="activeIndex"
            @update:activeIndex="updateActiveIndex"
          >
            <div class="flex-col">
              <div>Developed features based on client needs</div>
              <div>Adapted and optimized algorithms to meet evolving industry standards</div>
              <div>Advanced algorithm development and optimization</div>
              <div>Experience with WebGL and VueJS integrations</div>
              <div>Hands-on experience in BIM (Building Information Modeling) technologies</div>
              <div>Debugging and performance profiling for large-scale 3D models</div>
              <div><strong>Cross-platform integration and API development</strong></div>
            </div>
          </Select>
        </div>
      <div class="flex pad-top-16 video-container">
        <VideoLoader backgroundImage="/images/ViewerAxeoBIMBackground.png" title="Viewer AxeoBIM" videoUrl="visionneuse_axeobim.mp4" />
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
