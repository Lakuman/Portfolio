
<template>
  <div class="all-parent flex pad-top-64 pad-bottom-64 gap-32">
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
  };
</script>

<style scoped>
  #all {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex !important;
    flex-wrap: wrap;
    flex-direction: column !important;
    background-color: #041e22;
    align-items: center !important;
    justify-content: center;
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
</style>
