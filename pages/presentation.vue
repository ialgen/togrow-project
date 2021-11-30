<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="">
        <HeaderPresentation/>
        <div class="flex flex-row w-screen max-h-screen pt-16">
            <nav class="px-4 py-4 flex flex-col shadow-xl max-h-full bg-white">
                <div class="flex flex-row justify-center pb-4" aria-label="Pagination">
                    <a @click="changementArrow('left')" class="relative inline-flex items-center px-2 py-2 rounded-l-md border text-indigo-600 bg-white text-sm font-mediu hover:bg-gray-50">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a @click="changementArrow('right')" class="relative inline-flex items-center px-2 py-2 rounded-r-md border text-indigo-600 bg-white text-sm font-medium hover:bg-gray-50">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <ol role="list flex" class="space-y-4 overflow-scroll shadow-inner py-2 px-4">
                    <li v-for="step in steps" :key="step.name" class="">
                        <a v-if="step.status === 'complete'" :href="step.href" @click="changement(step.nId)" class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800">
                            <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">{{ step.id }}</span>
                            <span class="text-sm font-medium">{{ step.name }}</span>
                        </a>
                        <a v-else-if="step.status === 'current'" :href="step.href" @click="changement(step.nId)" class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600" aria-current="step">
                            <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase">{{ step.id }}</span>
                            <span class="text-sm font-medium">{{ step.name }}</span>
                        </a>
                        <a v-else :href="step.href" @click="changement(step.nId)" class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300">
                            <span class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">{{ step.id }}</span>
                            <span class="text-sm font-medium">{{ step.name }}</span>
                        </a>
                    </li>
                </ol>
            </nav>
            <div class="w-5/6 flex flex-col place-content-center">
                <div v-if="steps[0].status=='current'" class="">
                    <h2 class="text-6xl font-extrabold text-black text-center">
                        Ideas come from within.
                    </h2>
                </div>
                <div v-if="steps[1].status=='current'" class="pt-12 sm:pt-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
                                Togo in global economy
                            </h2>
                        </div>
                    </div>
                    <div class="mt-10 pb-12 sm:pb-16">
                        <div class="relative">
                            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="max-w-4xl mx-auto">
                                    <dl class="rounded-lg shadow-lg sm:grid sm:grid-cols-7 bg-indigo-50">
                                        <div class="col-span-2 flex flex-col border-t border-b border-gray-300 p-6 text-center sm:border-0 sm:border-r">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Toursits in 2019
                                            </dt>
                                            <dd class="order-1 text-2xl font-extrabold text-indigo-600">
                                            943 373
                                            </dd>
                                        </div>
                                        <div class="col-span-3 flex flex-col border-b border-gray-300 p-6 text-center sm:border-0 sm:border-r sm:border-l">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Tourism in 2019
                                            </dt>
                                            <dd class="order-1 text-4xl font-extrabold text-indigo-600">
                                            8% of GDP
                                            </dd>
                                        </div>
                                        <div class="col-span-2 flex flex-col border-t border-gray-300 p-6 text-center sm:border-0 sm:border-l">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Under 15 years old
                                            </dt>
                                            <dd class="order-1 text-2xl font-extrabold text-indigo-600">
                                            42% of pop
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="steps[2].status=='current'" class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
                    <div class="space-y-12">
                        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 class="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">Who are we?</h2>
                        </div>
                        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0">
                            <li>
                                <div class="space-y-4">
                                    <div class="aspect-w-3 aspect-h-2">
                                        <img class="object-cover shadow-lg rounded-lg" src="~/assets/pictures/wisdom.jpeg"/>
                                    </div>

                                    <div class="flex flex-col space-y-2">
                                        <div class="text-lg leading-6 font-medium space-y-1">
                                            <h3>Wisdom Adabunu</h3>
                                            <p class="text-indigo-600">CEO</p>
                                        </div>
                                        <a href="https://www.linkedin.com/in/wisdom-adabunu-035582151" class="text-gray-400 hover:text-gray-500">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="space-y-4">
                                    <div class="aspect-w-3 aspect-h-2">
                                        <img class="object-cover shadow-lg rounded-lg" src="~/assets/pictures/ialgen.jpeg"/>
                                    </div>

                                    <div class="flex flex-col space-y-2">
                                        <div class="text-lg leading-6 font-medium space-y-1">
                                            <h3>Ialgen Allal</h3>
                                            <p class="text-indigo-600">CTO</p>
                                        </div>
                                        <a href="https://www.linkedin.com/in/ialgen-allal-926517154" class="text-gray-400 hover:text-gray-500">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-if="steps[3].status=='current'" class="relative">
                    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                        <h2 class="text-base font-semibold tracking-wider text-indigo-600 uppercase">Exchange better</h2>
                        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        All-in-one platform
                        </p>
                        <div class="mt-12">
                        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                            <div class="pt-6">
                            <div class="flow-root bg-indigo-300 bg-opacity-10 rounded-lg px-6 pb-8 shadow-md">
                                <div class="-mt-6">
                                <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    </span>
                                <h3 class="mt-8 text-2xl font-medium text-gray-900 tracking-tight">Learn about business</h3>
                                <p class="mt-5 text-base text-gray-500">
                                    TOGrOw provides courses about the basics of business management.
                                </p>
                                </div>
                            </div>
                            </div>

                            <div class="pt-6">
                            <div class="flow-root bg-indigo-300 bg-opacity-10 rounded-lg px-6 pb-8 shadow-xl">
                                <div class="-mt-6">
                                <div>
                                    <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    </span>
                                </div>
                                <h3 class="mt-8 text-2xl font-medium text-gray-900 tracking-tight">Marketplace</h3>
                                <p class="mt-5 text-base text-gray-500">
                                    A marketplace dedicated to the Togolese community around the world.
                                </p>
                                </div>
                            </div>
                            </div>

                            <div class="pt-6">
                            <div class="flow-root bg-indigo-300 bg-opacity-10 rounded-lg px-6 pb-8 shadow-md">
                                <div class="-mt-6">
                                <div>
                                    <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    </span>
                                </div>
                                <h3 class="mt-8 text-2xl font-medium text-gray-900 tracking-tight">Grow as a business</h3>
                                <p class="mt-5 text-base text-gray-500">
                                    Together we aim at growing your business into a bigger market.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div v-if="steps[4].status=='current'">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:mx-16 lg:px-8">
                        <h2 class="text-3xl font-extrabold text-black text-center px-16">
                            A few places to be
                        </h2>
                        <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-2 lg:mt-8">
                            <div class="col-span-1 flex justify-center py-8 px-8 bg-indigo-50 rounded-2xl shadow-sm">
                                <img class="max-h-12" src="~assets/pictures/akaa.png" alt="Workcation" />
                            </div>
                            <div class="col-span-1 flex justify-center py-8 px-8 bg-indigo-50 rounded-2xl shadow-sm">
                                <img class="max-h-12" src="~assets/pictures/parcours.png" alt="Mirage" />
                            </div>
                            <div class="col-span-1 flex justify-center py-8 px-8 bg-indigo-50 rounded-2xl shadow-sm">
                                <p class="text-5xl"> 🇹🇬 🇫🇷 </p>
                            </div>
                            <div class="col-span-1 flex justify-center py-8 px-8 bg-indigo-50 rounded-2xl shadow-sm">
                                <p class="text-4xl"> TOGrOw 🎵 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="steps[5].status=='current'" class="container flex flex-col items-center">
                    <h2 class="text-2xl font-extrabold text-black text-center px-16">
                        The African landscape of b2c online marketplaces for physical good.
                    </h2>
                    <img src="~/assets/pictures/africa.jpeg" class="w-96 my-4">
                </div>
                <div v-if="steps[6].status=='current'" class="container max-h-screen flex flex-row">
                    <div v-if="charts[0].show" class="flex flex-col items-center">
                        <h2 class="text-3xl font-extrabold text-black text-center p-10">
                            Costs and revenue (5 years)
                        </h2>
                        <img src="~/assets/pictures/profit.png" class="object-contain w-7/12 m-10">
                    </div>
                    <div v-if="charts[1].show" class="flex flex-col items-center">
                        <h2 class="text-3xl font-extrabold text-black text-center p-10">
                            Price repartition
                        </h2>
                        <img src="~/assets/pictures/price.png" class="object-contain w-5/12 m-10">
                    </div>
                    <div class="flex flex-col justify-center w-10 py-4 m-10">
                        <a @click="finChange('left')" class="relative inline-flex items-center px-2 py-2 rounded-t-md border text-indigo-600 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a @click="finChange('right')" class="relative inline-flex items-center px-2 py-2 rounded-b-md border text-indigo-600 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
                <div v-if="steps[7].status=='current'">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:mx-16 lg:px-8">
                        <h2 class="text-3xl font-extrabold text-black text-center px-16">
                            Our vision and values
                        </h2>
                        <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-2 lg:mt-8">
                            <div class="col-span-1 flex justify-center p-2 bg-indigo-50 rounded-2xl shadow-sm">
                                <img class="max-h-20" src="~assets/pictures/unwomen.png" alt="Workcation" />
                            </div>
                            <div class="col-span-1 flex justify-center p-2 bg-indigo-50 rounded-2xl shadow-sm">
                                <img class="max-h-20" src="~assets/pictures/community.png" alt="Workcation" />
                            </div>
                            <div class="col-span-1 flex justify-center p-2 bg-indigo-50 rounded-2xl shadow-sm">
                                <img class="max-h-20" src="~assets/pictures/ecology.png" alt="Workcation" />
                            </div>
                            <div class="col-span-1 flex justify-center p-2 bg-indigo-50 rounded-2xl shadow-sm">
                                <img class="max-h-20" src="~assets/pictures/bcorp.png" alt="Workcation" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="steps[8].status=='current'" class="flex flex-col items-center">
                    <span class="relative flex flex-col shadow-lg bg-indigo-50 rounded-md w-96">
                        <a href="/financialplan">
                            <button type="button" class="w-full text-indigo-600 relative flex flex-row justify-evenly px-4 py-2 rounded-t-md border border-indigo-300  text-sm font-medium hover:bg-indigo-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                Detailed financial plan
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                        <a href="/businessplan">
                            <button type="button" class="w-full text-indigo-600 relative flex flex-row justify-evenly px-4 py-2 border border-indigo-300  text-sm font-medium hover:bg-indigo-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                Detailed business plan
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                        <a href="https://ecomconnect.org/page/african-marketplace-explorer">
                            <button type="button" class="w-full text-indigo-600 relative flex flex-row justify-evenly px-4 py-2 border border-indigo-300  text-sm font-medium hover:bg-indigo-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                African marketplace explorer
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                        <a href="http://www.growthmosaic.com/files/Women-Matter-Africa.pdf">
                            <button type="button" class="w-full text-indigo-600 relative flex flex-row justify-evenly px-4 py-2 border border-indigo-300  text-sm font-medium hover:bg-indigo-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                Women Matter - Africa
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                        <a href="https://bcorporation.net/">
                            <button type="button" class="w-full text-indigo-600 relative flex flex-row justify-evenly px-4 py-2 rounded-b-md border border-indigo-300  text-sm font-medium hover:bg-indigo-300 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                B Corporation
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let steps = [
    { nId: 1, id: 'Step 1', name: 'Personnal experience', href: '#', status: 'current' },
    { nId: 2, id: 'Step 2', name: 'Togo in global economy', href: '#', status: 'upcoming' },
    { nId: 3, id: 'Step 3', name: 'Our team', href: '#', status: 'upcoming' },
    { nId: 4, id: 'Step 4', name: 'Our products', href: '#', status: 'upcoming' },
    { nId: 5, id: 'Step 5', name: 'Marketing plan', href: '#', status: 'upcoming' },
    { nId: 6, id: 'Step 6', name: 'Market and competition analysis', href: '#', status: 'upcoming' },
    { nId: 7, id: 'Step 7', name: 'Financial plan', href: '#', status: 'upcoming' },
    { nId: 8, id: 'Step 8', name: 'Our vision and values', href: '#', status: 'upcoming' },
    { nId: 9, id: 'Step 9', name: 'Detailed plan and ressources', href: '#', status: 'upcoming' },
]
let currentStep = 1

const people = [
  {
    name: 'Wisdom Adabunu',
    role: 'CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/wisdom-adabunu-035582151',
  },
  {
    name: 'Ialgen Allal',
    role: 'CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkedinUrl: 'https://www.linkedin.com/in/ialgen-allal-926517154',
  },
]

const charts = [
    {
        id: 1,
        imagePath: "~/assets/pictures/profit.png",
        show: true
    },
    {
        id: 2,
        imagePath: "~/assets/pictures/price.png",
        show: false
    }
]

export default {
    data() {
        return {
            steps,
            people,
            currentStep,
            charts,
        }
    },
    methods: {
        changement(clicknId) {
            for(let step of this.steps) {
                if (step.nId < clicknId) {
                    step.status = 'complete'
                } else if (step.nId == clicknId) {
                    step.status = 'current'
                    currentStep = step.nId
                } else {
                    step.status = 'upcoming'
                }
            }
        },
        changementArrow(direction) {
            if (direction=='left' && currentStep > 1) {
                currentStep -= 1
            } else if (direction=='right' && currentStep < 9) {
                currentStep += 1
            }
            this.changement(currentStep)
        },
        finChange(direction) {
            if (direction=='left') {
                charts[0].show = true
                charts[1].show = false
            } else if (direction=='right') {
                charts[0].show = false
                charts[1].show = true
            }
        }
    }
}
</script>