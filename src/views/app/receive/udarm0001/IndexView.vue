
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

const contentStep = ref();
const { t } = useI18n();

onBeforeMount(() => {
  contentStep.value = [
    {
      title:"ภาษีโรงเรือนและที่ดิน/บำรุงท้องที่/ป้าย/<br>ที่ดินและสิ่งปลูกสร้าง.",
      step: 0,
      componentName: "Udarm0001",
      componentPath: "/receive/udarm0001",
    },
  ];
});
</script>

<template>
<ContentStep :contents="contentStep" />
</template>
