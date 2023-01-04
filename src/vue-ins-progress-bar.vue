<template>
  <div
  class="ins-progress"
  :class="[ins-progress-height, ins-progress-position, ins-progress-opacity, ins-progress-display]"
  >
  </div>
</template>
<script>
const inBrowser = typeof window !== 'undefined'
export default {
    name: 'VueInsProgressBar',
    computed: {
        options() {
            return this.progress.options
        },
        progress() {
            if (inBrowser) {
                return window.INSPBEventBus.INSPB
            }
            else {
                return {
                    options: {}
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const stylesheet = document.styleSheets[0];
            stylesheet.insertRule(".ins-progress-height { height: " + this.options.height + " }", 0);
            stylesheet.insertRule(".ins-progress-position { position: " + this.options.position + " }", 0);
            stylesheet.insertRule(".ins-progress-display { display: " + this.options.__isDisplay ? 'block' : 'none' + " }", 0);
            stylesheet.insertRule(".ins-progress-opacity { opacity: " + !!this.options.show ? 1 : 0 + " }", 0);
        })
    }
}

</script>
<style scoped>
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

</style>
