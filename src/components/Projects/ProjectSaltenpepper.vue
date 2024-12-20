<template>
    <div class="project">
      <div class="flex-col gap-32">
        <div style="font-size: 24px; font-weight: bold; text-align : left;">{{ $t('project.saltenpepper.title') }}</div>
        <div class="flex-col gap-16">
          <div class="flex-col gap-8">
            <span>{{ $t('project.saltenpepper.part_one') }}</span>
            <span>{{ $t('project.saltenpepper.part_two') }}</span>
          </div>
          <span style="font-weight: bold;">{{ $t('project.saltenpepper.role') }}</span>
        </div>
        <div class="flex gap-32" style="align-items: flex-start; justify-content: flex-start;">
          <div class="flex-col-project" style="max-width:500px; min-height: 350px;">
            <Select
              class="flex-col"
              :text="$t('project.saltenpepper.select.select_one.title')"
              iconBefore="/images/icons/code-icon.svg"
              :delay="300"
              :index="1"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
            <div class="flex-col">
                <div>{{ $t('project.saltenpepper.select.select_one.2D') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_one.character_movement') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_one.character_animations') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_one.loot_system') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_one.shop') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_one.lootable') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_one.transition') }}</div>
            </div>
            </Select>
            <Select
              class="flex-col"
              :text="$t('project.saltenpepper.select.select_two.title')"
              icon="/icons/game-design.png"
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <div>{{ $t('project.saltenpepper.select.select_two.brainstorming') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_two.mechanics') }}</div>
                <div>{{ $t('project.saltenpepper.select.select_two.refine') }}</div>
              </div>
            </Select>
            <Select
              class="flex-col"
              :text="$t('project.saltenpepper.select.select_tree.title')"
              icon="/icons/game-design.png"
              :delay="300"
              :index="3"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                  <div>Experience in combining 2D and 3D assets in game development.</div>
                  <div>Advanced understanding of turn-based combat mechanics.</div>
                  <div>Collaboration and communication skills in a small, multidisciplinary team.</div>
                  <div>Iterative prototyping and refining gameplay loops based on team feedback.</div>
                  <div><strong>UI/UX design integration for engaging user experiences.</strong></div>
              </div>
            </Select>
          </div>
          <div class="flex pad-top-16 video-container">
            <VideoLoader backgroundImage="/images/SaltenpepperBackground.png" title="Patreon video" videoUrl="patreon_snp.mp4" />
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

