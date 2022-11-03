<template>
  <div>
    <HeroSection />
    <ProductionCounter />
    <FeaturesSlider />
    <ForWhom />
    <FeedbackForm />
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
export default {
  components: { HeroSection },
  name: "IndexPage",
};
</script>
