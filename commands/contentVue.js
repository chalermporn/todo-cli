function contentVue(menu) {
  return `
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

const contentStep = ref();
const { t } = useI18n();

onBeforeMount(() => {
  contentStep.value = [
    {
      title:"${menu.menuTitle}",
      step: 0,
      componentName: "${menu.menuName}",
      componentPath: "${menu.rootPath}",
    },
  ];
});
</script>

<template>
<ContentStep :contents="contentStep" />
</template>
`;
}

module.exports = contentVue;
