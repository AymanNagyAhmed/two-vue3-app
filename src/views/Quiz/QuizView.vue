<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import Result from "@/components/Result.vue";
import quizzes from "@/data/quizzes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzes.find(quiz => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }

    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true;
    }

    currentQuestionIndex.value++;
}
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected" />
            <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
        </div>
        <div class="flex justify-center ">
            <button class="mx-4 px-6 rounded-lg text-lg font-medium bg-orange-100 text-neutral-800 " v-if="currentQuestionIndex" @click="currentQuestionIndex--">
                Previous Question
            </button>
            <button class="mx-4 px-6 rounded-lg text-lg font-medium bg-orange-100 text-neutral-800" @click="currentQuestionIndex++">
                Next Question
            </button>

        </div>
    </div>
</template>