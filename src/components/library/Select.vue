<template>
  <div class="select">
    <!-- Header cliquable -->
    <div class="flex align row-header" @click="toggleExpand">
      <!-- Icône avant -->
      <div v-if="iconBefore" class="flex icon-before">
        <img :src="iconBefore" alt="icon before" />
      </div>
      <!-- Texte du titre -->
      <div class="text">{{ text }}</div>
      <!-- Flèche -->
      <div :class="{ 'arrow-down': isExpanded, 'arrow-right': !isExpanded }" class="arrow"></div>
    </div>

    <!-- Contenu déroulant -->
    <transition name="expand-transition" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isExpanded" class="content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Select",
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
      default: 300,
    },
    index: {
      type: Number,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    // Détermine si l'élément est ouvert ou fermé
    isExpanded() {
      return this.activeIndex === this.index;
    },
  },
  methods: {
    toggleExpand() {
      // Émet un événement pour changer l'index actif
      if(this.activeIndex != this.index){
        this.$emit("update:activeIndex", this.isExpanded ? null : this.index);
      }
    },
    // Gestion des transitions pour l'animation d'ouverture/fermeture
    beforeEnter(el) {
      el.style.height = "0";
      el.style.opacity = "0";
    },
    enter(el, done) {
      el.offsetHeight; // Force un reflow
      el.style.transition = `height ${this.delay}ms ease-out, opacity ${this.delay}ms ease-out`;
      el.style.height = `${el.scrollHeight}px`;
      el.style.opacity = "1";
      done();
    },
    leave(el, done) {
      el.style.transition = `height ${this.delay}ms ease-in, opacity ${this.delay}ms ease-in`;
      el.style.height = "0";
      el.style.opacity = "0";
      done();
    },
  },
};
</script><style scoped>
/* Conteneur principal */
.select {
  display: inline-block; /* Permet au conteneur de s'adapter à la taille du contenu */
  max-width: 450px; /* Évite qu'il dépasse son parent */
  width: auto; /* Taille dynamique basée sur le contenu */
  overflow-wrap: break-word; /* Gère les retours à la ligne pour le texte trop long */
  word-wrap: break-word;
}

/* Header de l'élément cliquable */
.row-header {
  display: flex;
  align-items: center;
  min-width: 200px;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 2px solid #366c5e;
  color: #b3d4c5;
  cursor: pointer;
}

/* Icône avant */
.icon-before {
  margin-right: 10px;
}

/* Texte principal avec retours à la ligne automatiques */
.text {
  flex-grow: 1; /* Utilise l'espace restant */
  word-wrap: break-word; /* Coupe les mots si nécessaire */
  overflow-wrap: break-word; /* Compatibilité */
  white-space: normal; /* Permet le retour à la ligne */
  line-height: 1.5; /* Espacement entre les lignes */
}

/* Flèche d'ouverture */
.arrow {
  margin-left: 10px;
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

/* Contenu affiché */
.content {
  padding: 12px;
  color: #e0f7f1;
  border-bottom: 2px solid #366c5e;
  line-height: 1.5; /* Espacement du texte pour plus de lisibilité */
  overflow: hidden;
}
</style>
