<template>
  <div class="flex align project gap-32 pad-32">
    <div class="flex-col gap-16">
      <div style="font-size: 24px; font-weight: bold; text-align : left;">Viewer AxeoBIM</div>
      <div class="flex-col gap-16">
        <div class="flex-col gap-8">
          <span> A 3D model viewer developed at Axxone System. The AxeoBIM viewer is a sophisticated BIM tool allowing users to analyze 3D models in IFC and RVT formats. Built with Unity and integrated into the Web AxeoBIM platform via a JS API.</span>
          <span> When I was hired at Axxone System, I was tasked with creating this 3D viewer entirely from scratch. I faced numerous technical and algorithmic challenges but ultimately delivered the tool on the AxeoBIM platform by the end of 2023, following several years of development. This was my most complex project, and I was fortunate to rely on the support of Marc-Etienne Barrut (Technical Director) and Grégoire Haze (Software Developer) to bring it to completion.</span>
        </div>
        <span style="font-weight: bold;">Role : Full stack developer</span>
      </div>
      <div class="flex gap-32">
        <div class="flex-col" style="width:500px; height: 350px;">
          <Select
            class="flex-col"
            style="width:500px;"
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
            style="width:500px;"
            text="Responsibilities & Skills Acquired"
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
      <div class="flex pad-left-16">
        <VideoLoader backgroundImage="/images/ViewerAxeoBIMBackground.png"style="width: 420px; height: 250px" title="Viewer AxeoBIM" videoUrl="trailer_BA.mp4" />
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
.project{
  z-index: 1;
  background-image: url('/videos/noise.svg');
  background-size: cover; /* ou "contain" selon vos besoins */
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #0C3D3A;
  border-radius: 20px;
  max-width: 1050px;
  background-color: #051D1F;
}
</style>
