<template>
  <div class="skills">
    <div class="align flex" style="font-size: 32px; font-weight: bold; width: 60%;">Skills</div>
    <div class="flex align pad-top-32 skills-content gap-32">
      <ClickableIcon text="C#"  icon="/images/icons/file-c-sharp.svg" link="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview"></ClickableIcon>
      <ClickableIcon text="C++" icon="/images/icons/file-cpp.svg" link="https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"></ClickableIcon>
      <ClickableIcon text="HTML5" icon="/images/icons/file-html.svg" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"></ClickableIcon>
      <ClickableIcon text="Javascript" icon="/images/icons/file-js.svg" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"></ClickableIcon>
      <ClickableIcon text="CSS3" icon="/images/icons/file-css.svg" link="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"></ClickableIcon>
      <ClickableIcon text="Php" icon="/images/icons/php.svg" link="https://www.php.net/manual/en/index.php"></ClickableIcon>
      <ClickableIcon text="Unity" icon="/images/icons/unity.svg" link="https://docs.unity3d.com/6000.0/Documentation/Manual/UnityManual.html"></ClickableIcon>
      <ClickableIcon text="VSCode" icon="/images/icons/vscode.svg" link="https://code.visualstudio.com/docs"></ClickableIcon>
      <ClickableIcon text="Figma" icon="/images/icons/figma-logo.svg" link="https://www.figma.com/downloads/"></ClickableIcon>
      <ClickableIcon text="VueJS" icon="/images/icons/file-vue.svg" link="https://vuejs.org/"></ClickableIcon>
      <!-- <ClickableIcon text="NodeJS" icon="/images/icons/node.svg" link="https://nodejs.org/en"></ClickableIcon> -->
      <ClickableIcon text="ChatGPT" icon="/images/icons/gpt.svg" link="https://chatgpt.com/"></ClickableIcon>
      <ClickableIcon text="PhpMyAdmin" icon="/images/icons/phpmyadmin.svg" link="https://www.phpmyadmin.net/"></ClickableIcon>
    </div>
  </div>
  </template>
<script>
import ClickableIcon from "@/components/library/ClickableIcon.vue";
export default {
  components: { ClickableIcon },
  data() {
    return { // Index de la ligne active
    };
  },
  methods: {
  },
};
</script>

  <style scoped>
  .skills-content{
    z-index: 2;
    border: 2px solid #0C3D3A;
    border-radius: 20px;
    gap: 12px;
    max-width: 100%;
    justify-content: center; /* Centre les éléments horizontalement */
    align-items: center; /* Centre les éléments verticalement */
  }
  </style>
