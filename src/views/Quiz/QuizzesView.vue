<script setup>
import { ref, watch } from "vue";
import q from "@/data/quizzes.json";
import Card from "@/components/Card.vue"
import gsap from "gsap"

const quizzes = ref(q)
const search = ref("")

watch(search, () => {
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

const beforeEnter = (el) => {
    el.style.transform = "translateY(-60px)"
    el.style.opacity = 0;
}

const enter = (el) => {
    gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: el.dataset.index * 0.2
    })
}
</script> 
<template>
    <div>
        <header class="my-6 flex flex-col items-start  ">
            <h1 class="font-bold mr-6  sm:text-xl lg:text-lg">Quizzes</h1>
            <div class="relative">
                <input v-model.trim="search" type="text" class="p-1 rounded z-0 focus:shadow focus:outline-none"
                    placeholder="Search...">
                <div class="absolute top-4 right-3">
                    <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
            </div>
        </header>
        <div class="container flex flex-wrap justify-evenly">
            <TransitionGroup @before-enter="beforeEnter" @enter="enter" appear>
                <Card v-for="(quiz, index) in quizzes" :key="quiz.id" :quiz="quiz" :data-index="index" />
            </TransitionGroup>
        </div>
    </div>
</template>
  
<style scoped>
header input {
    background-color: rgba(128, 128, 128, 0.1);
}
</style>