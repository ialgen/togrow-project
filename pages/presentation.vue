<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div>
        <HeaderPages/>
        <div class="flex flex-row w-screen">
            <nav class="p-10">
                <ol role="list" class="space-y-4">
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
            <div v-if="steps[3].status=='current'" class="bg-black w-5/6">
                <div class="bg-gray-50 pt-12 sm:pt-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Trusted by developers from over 80 planets
                            </h2>
                            <p class="mt-3 text-xl text-gray-500 sm:mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
                            </p>
                        </div>
                    </div>
                    <div class="mt-10 pb-12 bg-white sm:pb-16">
                        <div class="relative">
                            <div class="absolute inset-0 h-1/2 bg-gray-50" />
                            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="max-w-4xl mx-auto">
                                    <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                        <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Pepperoni
                                            </dt>
                                            <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                                            100%
                                            </dd>
                                        </div>
                                        <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Delivery
                                            </dt>
                                            <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                                            24/7
                                            </dd>
                                        </div>
                                        <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                            <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Calories
                                            </dt>
                                            <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                                            100k
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let steps = [
    { nId: 1, id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
    { nId: 2, id: 'Step 2', name: 'Application form', href: '#', status: 'complete' },
    { nId: 3, id: 'Step 3', name: 'Preview', href: '#', status: 'current' },
    { nId: 4, id: 'Step 4', name: 'suite', href: '#', status: 'upcoming' },
    { nId: 5, id: 'Step 5', name: 'suite 2', href: '#', status: 'upcoming' },
]

export default {
    data() {
        return {
            steps,
        }
    },
    methods: {
        changement(clicknId) {
            for(let step of this.steps) {
                if (step.nId < clicknId) {
                    step.status = 'complete'
                } else if (step.nId == clicknId) {
                    step.status = 'current'
                } else {
                    step.status = 'upcoming'
                }
            }
        }
    }
}
</script>