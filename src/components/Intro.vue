<template>
    <div class="intro">
      <div class="flex-col gap-16 gap-32" style="max-width: 700px;">
        <div class="flex gap-16">
          <div class="align flex line-container"></div>
          <div class="align flex" style="font-size: 24px;">Adrien Roussel</div>
        </div>
        <div class="align flex" style="font-size: 32px; font-weight: bold; text-align : left;">{{ $t('intro.title') }}</div>
        <div class="flex-col gap-32">
          <div class="flex-col gap-16" style="max-width: 640px;">
            <span style="text-align: left;">{{ $t('intro.part_one') }}</span>
            <span style="text-align: left;">{{ $t('intro.part_two') }}</span>
          </div>
          <div class="flex gap-16">
            <Button class="flex" @click="handleDownloadCV">
              <span class="align flex gap-8">
                <slot>{{ $t('intro.download') }}</slot>
              </span>
            </Button>
            <Button class="flex" @click="handleConnect">
              <span class="align flex gap-16">
                <img src="/images/icons/linkedin-logo.svg" alt="Logo" class="button-logo" />
                <slot>{{ $t('intro.connect') }}</slot>
              </span>
            </Button>
          </div>
        </div>

      </div>
      <div class="flex pp" style="min-width: 200px;">
        <img src="/images/pp3.jpg"/>
      </div>
    </div>
  </template>
  <script lang="ts">
  import '@/sass/base.scss';
  import Button from "@/components/library/Button.vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Intro",
    components: {
      // eslint-disable-next-line vue/no-reserved-component-names
      Button,
    },
    methods: {
      handleConnect() {
        const url = "https://www.linkedin.com/in/adrien-roussel-4ba393132/";
        window.open(url, "_blank");
      },
      handleDownloadCV(){
        const filePath = "/cv/cv.pdf"; // Chemin relatif depuis le dossier public
        const link = document.createElement("a");
        link.href = filePath; // URL du fichier
        link.download = "cv.pdf"; // Nom du fichier téléchargé
        link.click();
      },
    },
    };
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Denk+One&display=swap" rel="stylesheet"');
  .line-container {
      margin-top: 20px;
      width: 75px; /* Largeur de la div */
      height: 1px; /* Hauteur de la div */
      background-color: #f0f0f0; /* Fond pour voir l'espace */
    }
  .pp {
    height: 465px;
    max-width: 400px;
    border-radius: 5%; /* Bords arrondis */
    overflow: hidden; /* Masque tout ce qui dépasse */
    box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.1), /* Ombre subtile */
        0 10px 20px rgba(0, 0, 0, 0.2); /* Ombre plus forte */
    background: linear-gradient(145deg, #ffffff, #d4d4d4); /* Effet relief */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pp img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Adapte l'image au conteneur sans déformation */
  }
  </style>
