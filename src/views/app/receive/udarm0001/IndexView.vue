
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

const contentStep = ref();
const { t } = useI18n();

onBeforeMount(() => {
  contentStep.value = [
    {
      title:"ภาษีโรงเรือนและที่ดิน/บำรุงท้องที่/ป้าย/<br>ที่ดินและสิ่งปลูกสร้าง.",
      step: 0,
      componentName: "UDARM0001",
      componentPath: "/receive/udarm0001/Udarm0001.vue",
    },
  ];
});
</script>

<template>
<ContentStep :contents="contentStep" />
</template>
