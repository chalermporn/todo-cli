function contentVueUd(menu) {
  return `
<script lang="ts" setup>

const props = defineProps({
  next: {
    type: Function,
    default: () => {},
  },
  previous: {
    type: Function,
    default: () => {},
  },
})

const { t } = useI18n();

</script>

<template>
  <div class="py-6 px-4">
    <div><h1>${menu}</h1></div>
  </div>
</template>
`;
}

module.exports = contentVueUd;
