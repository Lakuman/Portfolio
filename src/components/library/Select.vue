<template>
  <div class="expandable-row" @mouseenter="handleMouseEnter">
    <!-- Ligne d'en-tête avec l'icône avant et la flèche après -->
    <div class="row-header">
      <!-- Icône avant le texte -->
      <span v-if="iconBefore" class="icon-before">
        <img :src="iconBefore" alt="icon before" />
      </span>

      <!-- Texte -->
      <span class="text">{{ text }}</span>

      <!-- Flèche après le texte (change de direction selon l'état) -->
      <span :class="{'arrow-right': isExpanded, 'arrow-down': !isExpanded}" class="arrow"></span>
    </div>

    <!-- Contenu qui se déplie avec effet de glissement -->
    <transition name="expand-transition" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isExpanded" class="content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ExpandableRow",
  props: {
    text: {
      type: String,
      required: true,
    },
    iconBefore: {
      type: String,
      default: null,
    },
    delay: {
      type: Number,
      default: 300, // Durée de l'animation
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isExpanded() {
      // Vérifie si cet élément est l'élément actif
      return this.activeIndex === this.index;
    },
  },
  methods: {
    handleMouseEnter() {
      // Émet un événement pour mettre à jour l'index actif
      this.$emit("update:activeIndex", this.index);
    },
    beforeEnter(el) {
      el.style.height = "0";
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // Déclenche le reflow
      el.style.transition = `height ${this.delay}ms ease-out, opacity ${this.delay}ms ease-out`;
      el.style.height = `${el.scrollHeight}px`;
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = `height ${this.delay}ms ease-in, opacity ${this.delay}ms ease-in`;
      el.style.height = "0";
      el.style.opacity = 0;
      done();
    },
  },
};
</script>

<style scoped>
.expandable-row {
  border-bottom: 2px solid #366c5e;
  overflow: hidden;
}

.row-header {
  display: flex;
  align-items: center;
  padding: 12px;
  min-width: 400px;
  background-color: #112a29;
  color: #b3d4c5;
  cursor: pointer;
}

.icon-before {
  margin-right: 10px;
}

.text {
  flex-grow: 1;
}

.arrow {
  margin-left: auto;
  transition: transform 0.3s ease;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}

.arrow-right {
  transform: rotate(45deg);
}

.arrow-down {
  transform: rotate(-45deg);
}

.content {
  padding: 12px;
  background-color: #1d4d4f;
  color: #e0f7f1;
  overflow: hidden;
}
</style>
