<template>
  <div class="select">
    <div class="flex align row-header" @click="toggleExpand">
      <div v-if="iconBefore" class="flex icon-before">
        <img :src="iconBefore" alt="icon before" />
      </div>
      <div class="text">{{ text }}</div>
      <div :class="{'arrow-down': isExpanded, 'arrow-right': !isExpanded}" class="arrow"></div>
    </div>

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
    isExpanded() {
      return this.activeIndex === this.index;
    },
  },
  methods: {
    toggleExpand() {
      this.$emit("update:activeIndex", this.isExpanded ? null : this.index);
    },
    beforeEnter(el) {
      el.style.height = "0";
      el.style.opacity = "0";
    },
    enter(el, done) {
      el.offsetHeight; // Reflow
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
</script>

<style scoped>
.select {
  width:500px;
  overflow: hidden;
}

.row-header {
  display: flex;
  border-bottom: 2px solid #366c5e;
  align-items: center;
  padding: 12px;
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
  margin-left: 50px;
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
  color: #e0f7f1;
  overflow: hidden;
  border-bottom: 2px solid #366c5e;
}
</style>
