<template>
  <div class="project">
    <div class="flex-col gap-32">
      <div class="title">{{ $t('project.axeobim.title') }}</div>
      <div class="flex-col gap-16">
        <div class="flex-col gap-8">
          <span>{{ $t('project.axeobim.part_one') }}</span>
          <span>{{ $t('project.axeobim.part_two') }}</span>
        </div>
        <span style="font-weight: bold;">{{ $t('project.axeobim.role') }}</span>
      </div>
      <div class="flex gap-32" style="align-items: flex-start; justify-content: flex-start;">
        <div class="flex-col-project" style="max-width:500px; min-height: 350px;">
          <Select
            class="flex-col"
            :text="$t('project.axeobim.select.select_one.title')"
            iconBefore="/images/icons/code-icon.svg"
            :delay="300"
            :index="1"
            :activeIndex="activeIndex"
            @update:activeIndex="updateActiveIndex"
          >
            <div class="flex-col">
              <span>{{$t('project.axeobim.select.select_one.navigation')}}</span>
              <span>{{$t('project.axeobim.select.select_one.cutting_tools')}}</span>
              <span>{{$t('project.axeobim.select.select_one.measurement')}}</span>
              <span>{{$t('project.axeobim.select.select_one.parameter')}}</span>
              <span>{{$t('project.axeobim.select.select_one.placement')}}</span>
              <span>{{$t('project.axeobim.select.select_one.observation')}}</span>
              <span>{{$t('project.axeobim.select.select_one.algorithm')}}</span>
            </div>
          </Select>
          <Select
            class="flex-col"
            :text="$t('project.axeobim.select.select_two.title')"
            iconBefore="/images/icons/pen-icon.svg"
            :delay="300"
            :index="2"
            :activeIndex="activeIndex"
            @update:activeIndex="updateActiveIndex"
          >
            <div class="flex-col">
              <div>{{$t('project.axeobim.select.select_two.features')}}</div>
              <div>{{$t('project.axeobim.select.select_two.optimized')}}</div>
              <div>{{$t('project.axeobim.select.select_two.algorithm')}}</div>
              <div>{{$t('project.axeobim.select.select_two.experience')}}</div>
              <div>{{$t('project.axeobim.select.select_two.bim')}}</div>
              <div>{{$t('project.axeobim.select.select_two.debugging')}}</div>
              <div><strong>{{$t('project.axeobim.select.select_two.crossplatform')}}</strong></div>
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
