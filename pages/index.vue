<template>

    <div class="bg-white">
    <!--
        Mobile menu

        Off-canvas menu for mobile, show/hide based on off-canvas menu state.
    -->

    <!-- Hero section -->
    <div class="relative bg-gray-900">
        <!-- Decorative image and overlay -->
        <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <img src="~assets/pictures/Bienvenue-chez-les-Nana-Benz-les-reines-du-tissu-africain-au-Togolarge.jpeg" alt="" class="w-full h-full object-center object-cover">
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50"></div>

        <!-- Navigation -->
        <HeaderHome/>

        <div class="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
        <h1 class="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
        <p class="mt-4 text-xl text-white">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
        <a href="#" class="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">Shop New Arrivals</a>
        </div>
    </div>

    <main>
        <!-- Category section -->
        <section aria-labelledby="category-heading" class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 id="category-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
            <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">Browse all categories<span aria-hidden="true"> &rarr;</span></a>
        </div>

        <div class="mt-4 flow-root">
            <div class="-my-2">
                <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                    <div class="absolute min-w-screen-xl px-4 space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                            <span aria-hidden="true" class="absolute inset-0">
                            <img src="~assets/pictures/Eventailjauneamotif_1024x1024.jpeg" alt="" class="w-full h-full object-center object-cover">
                            </span>
                            <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                            <span class="relative mt-auto text-center text-xl font-bold text-white">New Arrivals</span>
                        </a>

                        <a href="#" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                            <span aria-hidden="true" class="absolute inset-0">
                            <img src="~assets/pictures/porteuse-grosse.jpeg" alt="" class="w-full h-full object-center object-cover">
                            </span>
                            <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                            <span class="relative mt-auto text-center text-xl font-bold text-white">Togolese art</span>
                        </a>

                        <a href="#" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                            <span aria-hidden="true" class="absolute inset-0">
                            <img src="~assets/pictures/plateaux-pierre-savon.jpeg" alt="" class="w-full h-full object-center object-cover">
                            </span>
                            <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                            <span class="relative mt-auto text-center text-xl font-bold text-white">Home and Kitchen</span>
                        </a>

                        <a href="#" class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                            <span aria-hidden="true" class="absolute inset-0">
                            <img src="~assets/pictures/danseurs.jpeg" alt="" class="w-full h-full object-center object-cover">
                            </span>
                            <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                            <span class="relative mt-auto text-center text-xl font-bold text-white">Paintings</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 px-4 sm:hidden">
            <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">Browse all categories<span aria-hidden="true"> &rarr;</span></a>
        </div>
        </section>

        <!-- Featured section -->
        <section aria-labelledby="social-impact-heading" class="max-w-7xl mx-auto py-24 px-4 sm:pt-32 sm:px-6 lg:px-8">
            <div class="relative rounded-lg overflow-hidden">
                <div class="absolute inset-0">
                    <img src="~assets/pictures/fetish.jpeg" alt="" class="w-full h-full object-center object-cover">
                </div>
                <div class="relative bg-gray-900 bg-opacity-30 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                    <div class="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                        <h2 id="social-impact-heading" class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            <span class="block sm:inline">Discover Togolese culture</span>
                        </h2>
                        <a href="#" class="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Open your horizon</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Collection section 
        <section aria-labelledby="collection-heading" class="max-w-xl mx-auto p-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="collection-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Collection</h2>
            <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

            <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <a href="#" class="group block">
                <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg" alt="Brown leather key ring with brass metal loops and rivets on wood table." class="w-full h-full object-center object-cover">
                </div>
                <h3 class="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
                <p class="mt-2 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
                </a>

                <a href="#" class="group block">
                <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg" alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard." class="w-full h-full object-center object-cover">
                </div>
                <h3 class="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
                <p class="mt-2 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will look great.</p>
                </a>

                <a href="#" class="group block">
                <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg" alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad." class="w-full h-full object-center object-cover">
                </div>
                <h3 class="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
                <p class="mt-2 text-sm text-gray-500">Be more productive than enterprise project managers with a single piece of paper.</p>
                </a>
            </div>
        </section> -->
    </main>

    <Footer/>
    </div>

</template>

<script>
export default {}
</script>
