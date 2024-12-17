<template>
  <div class="parent">
    <div style="font-size: 32px; font-weight: bold; text-align : left; width: 60%;">Projects</div>
    <ProjectBrokenAlchemy/>
    <ProjectSaltenpepper/>
    <ProjectAxeoBIM/>
    <ProjectAntarcticaOrigins/>
  </div>
</template>

<script>

import ProjectBrokenAlchemy from "@/components/Projects/ProjectBrokenAlchemy.vue";
import ProjectSaltenpepper from "@/components/Projects/ProjectSaltenpepper.vue";
import ProjectAxeoBIM from "@/components/Projects/ProjectAxeoBIM.vue";
import ProjectAntarcticaOrigins from "@/components/Projects/ProjectAntarcticaOrigins.vue";
export default {
    name: "Project",
    components: {
      ProjectSaltenpepper,
      ProjectBrokenAlchemy,
      ProjectAxeoBIM,
      ProjectAntarcticaOrigins,
    },
  };
</script>

<style scoped>
</style>
