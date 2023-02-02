
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

const contentStep = ref();
const { t } = useI18n();

onBeforeMount(() => {
  contentStep.value = [
    {
      title:"อากรการฆ่าสัตว์",
      step: 0,
      componentName: "Udarm0002",
      componentPath: "/receive/udarm0002",
    },
  ];
});
</script>

<template>
<ContentStep :contents="contentStep" />
</template>
