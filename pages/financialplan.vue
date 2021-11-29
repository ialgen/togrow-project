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
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-justify flex flex-col items-center">
            <h2>Financial plan</h2>
            <p>
                Based on a yearly projection of the number of visitors, we plan to be profitable during the 3rd year. Our profit depends directly on the volume of exchange as we get a 20% fee on every transaction, a cost similar on every marketplace. The price paid by the customers is mainly going to the small business in Togo as they receive 74% of the amount paid by the customer.
            </p>
            <img class="max-h-96 object-scale-down rounded-lg border shadow-2xl" src="~/assets/pictures/tableFP.jpeg" alt="" />
            <h2>Profit yearly evolution</h2>
            <img class="max-h-96 object-scale-down rounded-lg  shadow-2xl" src="~/assets/pictures/profit.png" alt=""  />
            <h2>Price repartition</h2>
            <img class="max-h-96 object-scale-down rounded-lg shadow-2xl" src="~/assets/pictures/price.png" alt="" />
        </div>
    </div>
  </div>
</div>
</template>