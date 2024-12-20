<template>
    <div class="project">
      <div class="flex-col gap-32">
        <div style="font-size: 24px; font-weight: bold; text-align : left;">{{ $t('project.broken_alchemy.title') }}</div>
        <div class="flex-col gap-16">
          <div class="flex-col gap-8">
            <span>{{ $t('project.broken_alchemy.part_one') }}</span>
            <span>{{ $t('project.broken_alchemy.part_two') }}</span>
          </div>
          <span style="font-weight: bold;">{{ $t('project.broken_alchemy.role') }}</span>
        </div>
        <div class="flex gap-32" style="align-items: flex-start; justify-content: flex-start;">
          <div class="flex-col-project" style="max-width:500px; min-height: 350px;">
            <Select
              class="flex-col"
              :text="$t('project.broken_alchemy.select.select_one.title')"
              iconBefore="/images/icons/code-icon.svg"
              :delay="300"
              :index="1"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
            <div class="flex-col">
              <span>{{ $t('project.broken_alchemy.select.select_one.dialogue') }}</span>
              <span>{{ $t('project.broken_alchemy.select.select_one.loots') }}</span>
              <div>{{ $t('project.broken_alchemy.select.select_one.interface') }}
                <ul>
                  <li>{{ $t('project.broken_alchemy.select.select_one.storage') }}</li>
                  <li>{{ $t('project.broken_alchemy.select.select_one.options') }}</li>
                  <li>{{ $t('project.broken_alchemy.select.select_one.rewards') }}</li>
                  <li>{{ $t('project.broken_alchemy.select.select_one.crafting') }}</li>
                </ul>
              </div>
            </div>

            </Select>
            <Select
              class="flex-col"
              :text="$t('project.broken_alchemy.select.select_two.title')"
              iconBefore="/images/icons/microphone-icon.svg"
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <div>{{ $t('project.broken_alchemy.select.select_two.ten_song') }}</div>
                <div>{{ $t('project.broken_alchemy.select.select_two.sounds') }}</div>
                <div>{{ $t('project.broken_alchemy.select.select_two.writing') }}</div>
                <div>{{ $t('project.broken_alchemy.select.select_two.analyze') }}</div>
              </div>
            </Select>
            <Select
              class="flex-col"
              :text="$t('project.broken_alchemy.select.select_tree.title')"
              iconBefore="/images/icons/pen-icon.svg"
              :delay="300"
              :index="3"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <div>{{ $t('project.broken_alchemy.select.select_tree.collaboration') }}</div>
                <div>{{ $t('project.broken_alchemy.select.select_tree.management') }}</div>
                <div>{{ $t('project.broken_alchemy.select.select_tree.problem_solving') }}</div>
                <div>{{ $t('project.broken_alchemy.select.select_tree.mechanics') }}</div>
              </div>
            </Select>
          </div>
        <div class="flex pad-top-16 video-container">
          <VideoLoader backgroundImage="/images/BrokenAlchemyBackground.png" title="Broken Alchemy Trailer" videoUrl="trailer_BA.mp4" />
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
