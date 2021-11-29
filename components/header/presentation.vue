<template>
    <header class="z-10 w-screen fixed">
        <nav aria-label="Top">
            <!-- Secondary navigation -->
            <div class="bg-opacity-60 bg-indigo-600">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div class="h-16 flex items-center justify-between">
                            <!-- Logo (lg+) -->
                            <div class=" flex-1 flex items-center">
                            <a href="/">
                                <span class="sr-only">Workflow</span>
                                <LogoMain/>
                            </a>
                            </div>

                            <div class=" h-full flex">
                                <!-- Flyout menus -->
                                <div class="px-4 bottom-0 inset-x-0">
                                    <div class="h-full flex justify-center space-x-8">
                                        <a href="/women" class="flex items-center text-sm font-medium text-white">Women</a>
                                        <a href="/men" class="flex items-center text-sm font-medium text-white">Men</a>
                                        <a href="/presentation" class="flex items-center text-sm font-medium text-white">About us</a>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-1 flex items-center justify-end">
                                <a href="#" class="hidden text-sm font-medium text-white lg:block">
                                    Search
                                </a>

                                <div class="flex items-center lg:ml-8">
                                    <!-- Help -->
                                    
                                    <a href="#" class=" text-sm font-medium text-white block">Help</a>

                                    <!-- Cart -->
                                    <div class="ml-4 flow-root lg:ml-8">
                                        <a href="#" class="group -m-2 p-2 flex items-center">
                                            <!-- Heroicon name: outline/shopping-bag -->
                                            <svg class="flex-shrink-0 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            <span class="ml-2 text-sm font-medium text-white">0</span>
                                            <span class="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>