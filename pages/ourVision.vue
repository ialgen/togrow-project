<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
<template>
<div>
  <HeaderPages/>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Vision</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8 text-justify">
            We envision a thriving small and medium business sector in sub-Saharan Africa; one which includes local suppliers in fair supply-chains, one which generates quality local employment, and one which delivers valuable goods and services in rural communities.
            <br><br>We aim at creating benefits not only for shareholders but for all stakeholders.
        </p>
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-justify">
        <h2>Our core values</h2>
        <p>
            TOGrOw values are at the core of every one of our decisions. We believe that businesses can be a force for good. That’s why we try to channel our energy not only on financial profit but also on improving the wellbeing of the ones involved in business with us. The empowerment of Togolese communities is a goal on the same level as being a profitable company. We believe that both wellbeing and high levels of creative production are bound. 
            <br><br>While embracing our social values, we will not forget that protecting the environment is essential if we want to become a sustainable business. We are not accepting big industries on our platform, and we will make sure that every small business we work with respects and shares the same core values that we do.
            <br><br>We plan to get the B Corp certification because we want to participate in accelerating a global culture shift to redefine success in business and build a more inclusive sustainable economy. We believe that we can meet the highest standards of social and environmental performance while balancing profit and purpose.
        </p>
        <h2>Broken bridge between supply and demand</h2>
        <p>
            Togo is a relatively small country when compared to wider African countries. However, Togo is known as the “small Africa” because of the significant diversity of its landscapes. In 2019, almost one million tourists went to Togo, therefore making the tourism contribution as 10% of the GDP this year. When covid-19 hit the global economy Togo was weakened by the sudden stop of tourists’ influx. Even though we are beginning to live with less restrictions in Europe, the bridge between our economy and African countries has been substantially severed. That is why we need to unearth a new way to link local craftsmanship with buyers in developed countries.
        </p>
      </div>
    </div>
    <section aria-labelledby="social-impact-heading" class="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8">
        <div class="relative rounded-lg overflow-hidden">
            <div class="absolute inset-0">
                <img src="~assets/pictures/fetish.jpeg" alt="" class="w-full h-full object-center object-cover">
            </div>
            <div class="relative bg-gray-900 hover:bg-white hover:bg-opacity-10 text-white bg-opacity-30 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                <div class="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                    <h2 id="social-impact-heading" class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        <span class="block sm:inline">Discover Togolese culture</span>
                    </h2>
                </div>
            </div>
        </div>
    </section>
  </div>
</div>
</template>