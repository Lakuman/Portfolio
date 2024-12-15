<template>
    <div class="project">
      <div class="flex-col gap-32">
        <div style="font-size: 24px; font-weight: bold; text-align : left;">Broken Alchemy</div>
        <div class="flex-col gap-16">
          <div class="flex-col gap-8">
            <span> An Android video game developed in partnership with talented illustrators Gautier Filliard and Eugénie Vallier. Broken Alchemy is a humorous visual novel where you play Alan Bique, an alchemist tasked with taking over his master’s alchemy shop.</span>
            <span> We chose to develop this project because it allowed us to leverage each team member's individual skills to create a project quickly, efficiently, and within a reasonable budget. Gautier Filliard came up with the idea of a card game set in a potion-themed universe, which we later transformed into a visual novel.</span>
          </div>
          <span style="font-weight: bold;">Role : Technical Developer / Sound Designer / Product Manager</span>
        </div>
        <div class="flex gap-32" style="align-items: flex-start; justify-content: flex-start;">
          <div class="flex-col" style="max-width:500px; height: 350px;">
            <Select
              class="flex-col"
              text="Game Design et Programmation"
              iconBefore="/images/icons/code-icon.svg"
              :delay="300"
              :index="1"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
            <div class="flex-col">
              <span>Dialogue system and choice saving</span>
              <span>Loot items</span>
              <div>Interface integration:
                <ul>
                  <li>Item storage</li>
                  <li>Game options (Sound and Language)</li>
                  <li>Rewards</li>
                  <li>Potion crafting mini-game</li>
                </ul>
              </div>
            </div>

            </Select>
            <Select
              class="flex-col"
              text="Sound Design & Writing"
              iconBefore="/images/icons/microphone-icon.svg"
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <div>Composed 10 original tracks for the game’s soundtrack</div>
                <div>Integrated UI sound effects and overall sound design</div>
                <div>Wrote 10 out of 50 planned episodes for 3 hours of gameplay.</div>
                <div>Analyzed the narrative impact of player choices.</div>
              </div>
            </Select>
            <Select
              class="flex-col"
              text="Additional Skills Acquired"
              iconBefore="/images/icons/pen-icon.svg"
              :delay="300"
              :index="3"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <div>Team collaboration with artists and writers</div>
                <div>Time and task management for episodic content development</div>
                <div>Creative problem-solving for balancing humor and gameplay mechanics</div>
                <div>Experience integrating narrative-driven mechanics in gameplay</div>
              </div>
            </Select>
          </div>
        <div class="flex pad-top-16">
          <VideoLoader backgroundImage="/images/BrokenAlchemyBackground.png" style="width: 420px; height: 250px;" title="Broken Alchemy Trailer" videoUrl="trailer_BA.mp4" />
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
  </style>
