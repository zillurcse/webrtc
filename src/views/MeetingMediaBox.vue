<template>
    <div v-show="video" :id="'per-video-media-' + index" style="width: 100%;height: 100%"></div>
</template>

<script>
export default {
    props: ['part', 'index'],
    mounted() {
        this.load_video()
    },
    methods: {
        load_video() {
            var media_el = document.getElementById('per-video-media-' + this.index);
            this.part.video.media.play(media_el);
        },
    }
}
</script>

<style></style>