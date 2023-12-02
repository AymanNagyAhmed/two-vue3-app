<template>
  <div class="flex flex-wrap justify-evenly mt-10">

    <!-- card 1 -->
    <div class="p-4 max-w-sm rounded overflow-hidden">
      <!-- card image -->
      <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-4 flex-col">
        <div class="relative">
        <a href="#">
          <img class="w-full"
            src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            alt="Sunset in the mountains">
            <!-- overlay -->
          <div
            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
        </a>
      </div>
      
        <div class="flex flex-col justify-between flex-grow mt-3">
          <p class="leading-relaxed text-base text-white dark:text-gray-300">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>


  </div>
</template>


<script setup>

</script>