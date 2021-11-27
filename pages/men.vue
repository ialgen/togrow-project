<template>
  <div>
    <HeaderPages/>
    <div class="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-4xl text-center pb-10 font-bold">Men</h2>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
            <img src="~assets/pictures/habit_homme.jpeg" class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
              {{ product.name }}
            </h3>
            <p>
              {{ product.price }}
            </p>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">
            {{ product.description }}
          </p>
        </a>
      </div>
    </div>
    <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
        <div class="hidden sm:block">
            <p class="text-sm text-gray-700">
                Showing
                {{ ' ' }}
                <span class="font-medium">1</span>
                {{ ' ' }}
                to
                {{ ' ' }}
                <span class="font-medium">6</span>
                {{ ' ' }}
                of
                {{ ' ' }}
                <span class="font-medium">20</span>
                {{ ' ' }}
                results
            </p>
        </div>
        <div class="flex-1 flex justify-between sm:justify-end">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
            </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
            </a>
        </div>
    </nav>
    <Footer/>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: 'T-shirt',
    href: '#',
    price: '$13',
    description: '3 sizes available',
  },
  {
    id: 2,
    name: 'T-shirt',
    href: '#',
    price: '$64',
    description: '3 sizes available',
  },
  {
    id: 3,
    name: 'T-shirt',
    href: '#',
    price: '$32',
    description: '3 sizes available',
  },
  {
    id: 4,
    name: 'T-shirt',
    href: '#',
    price: '$13',
    description: '3 sizes available',
  },
  {
    id: 5,
    name: 'T-shirt',
    href: '#',
    price: '$64',
    description: '3 sizes available',
  },
  {
    id: 6,
    name: 'T-shirt',
    href: '#',
    price: '$32',
    description: '3 sizes available',
  },
]

export default {
  data() {
    return {
      products,
    }
  },
}
</script>