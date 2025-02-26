<template>
  <div id="all" class="all-parent flex pad-top-64 pad-bottom-64 gap-32">
    <div id="language-switcher">
      <button class="lang-btn" @click="changeLanguage('fr')">
        <img src="/images/icons/french.svg" alt="French" />
      </button>
      <button class="lang-btn" @click="changeLanguage('en')">
        <img src="/images/icons/english.svg" alt="English" />
      </button>
    </div>

    <div class="svg-top-right">
        <img src="/images/lumos.svg" alt="Lumos SVG" />
    </div>
    <Intro/>
    <Projects/>
    <Skills/>
    <Coworkers/>
    <Hobbies/>
    <ContactForm />
  </div>
</template>

<script lang="ts">
  import '@/sass/base.scss';
  import Projects from "@/components/Projects.vue";
  import Skills from "@/components/Skills.vue";
  import Intro from "@/components/Intro.vue";
  import Coworkers from "@/components/Coworkers.vue";
  import Hobbies from "@/components/HobbiesInterest.vue";
  import ContactForm from "@/components/ContactForm.vue";
  import { useI18n } from 'vue-i18n';

  export default {
    name: "App",
    components: {
      Intro,
      Projects,
      Skills,
      Coworkers,
      Hobbies,
      ContactForm,
    },
    setup() {
      const { locale } = useI18n();
      const changeLanguage = (lang: string) => {
        locale.value = lang; // Change la langue
        localStorage.setItem('language', lang); // Sauvegarde dans localStorage
      };

      return {
        changeLanguage,
      };
    },
  };
</script>

<style scoped>
  #all {
    background-color: #041e22;
    color: #b3d4c5;
  }
  .svg-top-right {
      overflow: hidden;
      position: fixed;
      top: 0px;
      right: -600px; /* Décalé en dehors de la page */
      width: 1759px;
      height: 1150px;
      z-index: -0; /* Toujours au-dessous du contenu */
  }
  #language-switcher {
  position: fixed;
  top: 5px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000; /* Pour être au-dessus du contenu principal */
}

.lang-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;
}

.lang-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.lang-btn:hover {
  transform: scale(1.1);
}

</style>
