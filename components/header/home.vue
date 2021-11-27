<template>
    <header class="relative z-10">
        <nav aria-label="Top">
            <!-- Top navigation -->
            <div class="bg-gray-900">
                <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
                    <!-- Currency selector -->
                    <form>
                        <div>
                            <label for="desktop-currency" class="sr-only">Currency</label>
                            <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                <select id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                                    <option>EUR</option>

                                    <option>XOF</option>
                                </select>
                                <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="flex items-center space-x-6">
                        <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
                        <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
                    </div>
                </div>
            </div>

            <!-- Secondary navigation -->
            <div class="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div class="h-16 flex items-center justify-between">
                            <!-- Logo (lg+) -->
                            <div class=" flex-1 flex items-center">
                            <a href="#">
                                <span class="sr-only">Workflow</span>
                                <LogoMain/>
                            </a>
                            </div>

                            <div class=" h-full flex">
                                <!-- Flyout menus -->
                                <div class="px-4 bottom-0 inset-x-0">
                                    <div class="h-full flex justify-center space-x-8">
                                        <div class="flex">
                                            <div class="relative flex">
                                                <button type="button" class="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white" aria-expanded="false">
                                                    Women
                                                    <!-- Open: "bg-white", Closed: "" -->
                                                    <span class="absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200" aria-hidden="true"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="relative flex">
                                                <button type="button" class="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white" aria-expanded="false">
                                                    Men
                                                    <!-- Open: "bg-white", Closed: "" -->
                                                    <span class="absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200" aria-hidden="true"></span>
                                                </button>
                                            </div>                            
                                        </div>
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