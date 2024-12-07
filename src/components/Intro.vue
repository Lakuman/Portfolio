<template>
    <div class="intro flex align gap-32">
      <div class="flex-col gap-16 gap-32" style="max-width: 500px; min-width: 300px;">
        <div class="flex gap-16">
          <div class="align flex line-container"></div>
          <div class="align flex" style="font-size: 24px;">Adrien Roussel</div>
        </div>
        <div class="align flex" style="font-size: 32px; font-weight: bold; text-align : left;">Game & Web developer based in Lyon</div>
        <div class="flex-col gap-32">
          <div class="flex-col gap-16">
            <span style="text-align: left;">
              Over the past six years, I have honed and strengthened my programming skills, refined my agile working methodology, and developed strong teamwork and communication abilities. These experiences have prepared me to seamlessly integrate into any development team, regardless of its size or focus. My dual expertise as a Game and Web Developer provides me with exceptional versatility in the field.
            </span>
            <span style="text-align: left;">
              In addition, I have cultivated excellent communication, management, and team leadership skills, positioning me as an ideal candidate to lead web and creative development projects with confidence and efficiency.
            </span>
          </div>
          <div class="flex gap-16">
            <Button class="flex" @click="handleDownloadCV">
              <span class="align flex gap-8">
                <img src="/images/icons/cv.svg" alt="Logo" class="button-logo" />
                <slot>Download my CV</slot>
              </span>
            </Button>
            <Button class="flex" @click="handleConnect">
              <span class="align flex gap-16">
                <img src="/images/icons/linkedin-logo.svg" alt="Logo" class="button-logo" />
                <slot>Connect !</slot>
              </span>
            </Button>
          </div>
        </div>

      </div>
      <div class="flex pp" style="min-width: 200px;">
        <img src="/images/pp.jpg"/>
      </div>
    </div>
  </template>
  <script>
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
        const filePath = "/cv/cv.svg"; // Chemin relatif depuis le dossier public
        const link = document.createElement("a");
        link.href = filePath; // URL du fichier
        link.download = "cv.svg"; // Nom du fichier téléchargé
        link.click();
      },
    },
    };
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Denk+One&display=swap" rel="stylesheet"');
  .intro{
    max-width: 1160px;
  }
  .line-container {
      margin-top: 20px;
      width: 75px; /* Largeur de la div */
      height: 1px; /* Hauteur de la div */
      background-color: #f0f0f0; /* Fond pour voir l'espace */
    }
  .pp {
    overflow: hidden;
    height: 565px;
    width: 400px;
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
