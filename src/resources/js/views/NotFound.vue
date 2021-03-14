<template>
    <div @mousemove="onMouseMove">
        <div class="flex flex-col justify-center mt-8 md:my-28 items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
            <p class="font-semibold text-red-500 text-9xl dark:text-red-600">404</p>
            <div class="space-y-2">
                <h1 id="pageTitle" class="flex items-center space-x-2">
                    <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-red-500 dark:text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <span class="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
                  Oops! Page not found.
                </span>
                </h1>
                <p class="text-base font-normal text-gray-600 dark:text-gray-300">
                    The page you are looking for was not found.
                </p>
                <p class="text-base font-normal text-gray-600 dark:text-gray-300">
                    You may return to
                    <router-link :to="{ name: 'home' }" class="text-blue-600 hover:underline dark:text-blue-500">
                        home page
                    </router-link>.
                </p>
            </div>
        </div>
<!--        <div class="torch" :style="{ left: x + 'px', top: y + 'px' }"></div>-->
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        data() {
            return {
                x: 0,
                y: 0
            }
        },
        methods: {
            onMouseMove(event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
        },
    }
</script>

<style lang="scss" scoped>
.torch {
    margin: -150px 0 0 -150px;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 0 9999em #000000f7;
    opacity: 1;
    border-radius: 50%;
    position: fixed;
    background: rgba(0,0,0,0.3);

    &:after {
         content: '';
         display: block;
         border-radius: 50%;
         width: 100%;
         height: 100%;
         top: 0px;
         left: 0px;
         box-shadow: inset 0 0 40px 2px #000,
         0 0 20px 4px rgba(13,13,10,0.2);
     }
}
</style>
