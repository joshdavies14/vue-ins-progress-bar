<template>
    <div
        ref="progressBar"
        class="ins-progress"
        :class="[options.__isDisplay ? 'd-block' : 'd-none',
                 options.show ? 'opacity-1' : 'opacity-0']"
    >
    </div>
</template>
<script>
const inBrowser = typeof window !== 'undefined';
export default {
    name: 'VueInsProgressBar',
    computed: {
        options() {
            return this.progress.options;
        },
        progress() {
            if (inBrowser) {
                return window.INSPBEventBus.INSPB;
            }

                return {
                    options: {},
                };
        },
    },
    mounted() {
        this.$nextTick(() => {
            /* this.$refs.progressBar.style.height = this.options.height;
            this.$refs.progressBar.style.position = this.options.position; */
        });
    },
};

</script>
<style>
.ins-progress {
    background: #a307ba;
    background: #27c4f5 -webkit-gradient(linear,left top,right top,from(#27c4f5),color-stop(#a307ba),color-stop(#fd8d32),color-stop(#70c050),to(#27c4f5));
    background: #27c4f5 -webkit-linear-gradient(left,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5);
    background: #27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5);

    -webkit-animation: 2s linear infinite ins,.5s ease-out insEnter;
    animation: 2s linear infinite ins,.5s ease-out insEnter;

    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;

    -webkit-transform-origin: left;
    transform-origin: left;

    background-size: 500%;

    z-index: 999999;
    position: fixed;
    display: block;
    width: 100%;
    opacity: 1;
    left: 0;
    top: 0;
}

@-webkit-keyframes ins {
    0% { background-position: 0% 0 } to { background-position: 125% 0 }
}

@keyframes ins {
    0% { background-position:0% 0 } to { background-position: 125% 0 }
}

@-webkit-keyframes insEnter {
    0% { -webkit-transform:scaleX(0); transform:scaleX(0) } to { -webkit-transform: scaleX(1); transform: scaleX(1) }
}

@keyframes insEnter {
    0% { -webkit-transform:scaleX(0); transform:scaleX(0) } to { -webkit-transform:scaleX(1); transform:scaleX(1) }
}

.d-block {
    display: block;
}

.d-none {
    display: none;
}

.opacity-1 {
    opacity: 1;
}

.opacity-0 {
    opacity: 0;
}

</style>
