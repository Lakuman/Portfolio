
<template>
  <div class="flex-col align pad-top-64" id="all">
    <div class="svg-top-right">
        <img src="/images/lumos.svg" alt="Lumos SVG" />
    </div>
    <div id="intro">
      <Intro />
    </div>
    <div id="cards" class="flex-col pad-32 gap-64">
      <div class="align flex" style="font-size: 32px; font-weight: bold; text-align : left;">Projects</div>
      <ProjectBrokenAlchemy/>
      <ProjectSaltenpepper/>
      <ProjectAxeoBIM/>
      <ProjectAntarcticaOrigins/>
      <Skills/>
      <Coworkers/>
      <Hobbies/>
    </div>
    <div id="contactform" >
      <ContactForm />
    </div>
  </div>
</template>

<script lang="ts">
  import '@/sass/base.scss';
  import ProjectBrokenAlchemy from "@/components/Projects/ProjectBrokenAlchemy.vue";
  import ProjectSaltenpepper from "@/components/Projects/ProjectSaltenpepper.vue";
  import ProjectAxeoBIM from "@/components/Projects/ProjectAxeoBIM.vue";
  import Skills from "@/components/Skills.vue";
  import ProjectAntarcticaOrigins from "@/components/Projects/ProjectAntarcticaOrigins.vue";
  import Intro from "@/components/Intro.vue";
  import Coworkers from "@/components/Coworkers.vue";
  import Hobbies from "@/components/HobbiesInterest.vue";
  import ContactForm from "@/components/ContactForm.vue";

  export default {
    name: "App",
    components: {
      ProjectSaltenpepper,
      ProjectBrokenAlchemy,
      ProjectAxeoBIM,
      ProjectAntarcticaOrigins,
      Intro,
      Skills,
      Coworkers,
      Hobbies,
      ContactForm,
    },
  };
</script>

<style scoped>
  #contactform{
    width: 1000px;
    z-index: -1; /* Toujours au-dessus du contenu */
  }
  #intro{
    z-index: 1; /* Toujours au-dessus du contenu */
  }
  #all {
    background-color: #041e22;
  }
  .svg-top-right {
      overflow: hidden;
      position: fixed;
      top: 0px;
      right: -600px; /* Décalé en dehors de la page */
      width: 1759px;
      height: 1150px;
      z-index: -0; /* Toujours au-dessus du contenu */
  }
</style>
