<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(['quiz']);

const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`)
};
</script>

<template>
    <!-- card 1 -->
    <div class="p-4 max-w-sm rounded overflow-hidden">
        <!-- card image -->
        <div @click="navigateToQuiz" class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-4 flex-col">
            <div class="relative">
                <a href="#">
                    <img class="w-full" :src="quiz.img" alt="Sunset in the mountains">
                    <!-- overlay -->
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
            </div>

            <div class="flex flex-col justify-between flex-grow mt-3">
                <h2 class="leading-relaxed text-base text-white dark:text-gray-300">{{ quiz.name }}</h2>
                <a @click="navigateToQuiz" href="#"
                    class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                    {{ quiz.questions.length }} questions
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <!-- <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div> -->
</template>


<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0
}

.card .card-text {
    padding: 0 5px
}

.card .card-text h2 {
    font-weight: bold;
}
</style>
