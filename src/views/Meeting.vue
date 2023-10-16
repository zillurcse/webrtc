<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="h-[90vh] w-[1350px] mx-auto" v-if="!show">
        <div class="flex items-center h-full">
            <div class="w-1/2">

                <div class="relative">
                    <div class="video border-2 border-prim-dark rounded-lg h-96" id="video" v-show="!video.mute">
                    </div>
                    <div v-show="video.mute"
                        class=" border-2 border-prim-dark bg-gray flex justify-center items-center text-white text-base rounded-lg h-96">
                        camera is off
                    </div>

                    <p class="" v-if="video_preview_loading">Lodding....</p>

                </div>

                <div class="controler flex items-center gap-5 justify-center mt-5">
                    <button @click="toggle_audio" v-if="audio.mute"
                        class="w-16 h-16 rounded-full border border-error flex justify-center items-center text-error">


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>


                    </button>
                    <button v-else @click="toggle_audio"
                        class="w-16 h-16 rounded-full border border-prim-dark flex justify-center items-center text-prim-dark">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    </button>
                    <button @click="toggle_video" v-if="video.mute"
                        class="w-16 h-16 rounded-full border border-error flex justify-center items-center text-error">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                        </svg>


                    </button>
                    <button v-else @click="toggle_video"
                        class="w-16 h-16 rounded-full border border-prim-dark flex justify-center items-center text-prim-dark">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round"
                                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex justify-center items-center gap-5">
                    <button @click="joinRoom"
                        class=" flex items-center gap-2 h-[46px] justify-center  px-10 py-2 text-base rounded-full font-medium border bg-prim text-white transition-all duration-700 hover:bg-prim-dark active:bg-prim">
                        Join now
                    </button>
                    <button @click="close"
                        class=" flex items-center gap-2 h-[46px] justify-center px-10 py-2 text-base rounded-full font-medium border bg-gray text-white transition-all duration-700 hover:bg-opacity-20 active:bg-opacity-60">
                        Back
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <MeetingBox :video="video" :audio="audio" @muteVideo="toggleMeetBoxVideo" @muteAudio="toggleMeetBoxAudio" :uid="uid"  :uName="uName"/>
    </div>
</template>

<script>
import AgoraRTC from "agora-rtc-sdk-ng"
import MeetingBox from "./Meeting-box.vue";


export default {
    components: { MeetingBox },
    props: ['uid','uName'],

    data() {
        return {
            audio: {
                device_id: null,
                mute: false,
                media: null,
                track: null,
            },
            video: {
                device_id: null,
                mute: false,
                media: null,
                track: null,
            },
            video_preview_loading: false,
            show: false,
            hasView: false

        };
    },

    async mounted() {



        if (!this.hasView) {
            this.preview_video_audio();
            this.hasView = true
        }

    },


    methods: {
        async toggleMeetBoxAudio() {
            this.audio.mute = !this.audio.mute;
            await this.audio.media.setEnabled(false);
        },
        async toggleMeetBoxVideo() {
            this.video.mute = !this.video.mute;
            await this.video.media.setEnabled(false);
        },
        async preview_video_audio() {
            if (!this.hasView) {
                this.update_audio();
                this.update_video();
            }
            this.hasView = true
        },
        start_meeting() {
            if (this.video.mute == false) {
                this.update_video();
            }
            else {
                this.video.media.setEnabled(false);
            }
            if (this.audio.mute == false) {
                this.update_audio();
            }
        },
        async update_video() {
            this.video.media = await AgoraRTC.createCameraVideoTrack({ cameraId: this.video.device_id });
            if (this.show === false) {
                this.video.media.play('video');

            } else {
                console.log('meeting box');
            }
        },
        async update_audio() {
            this.audio.media = await AgoraRTC.createMicrophoneAudioTrack({ microphoneId: this.audio.device_id });
            if (this.audio.mute) {
                console.log(this.audio.media, 'this.audio.media');
                await this.audio.media.setEnabled(true);
            }
            else {
                await this.audio.media.setEnabled(false);
            }
        },
        async toggle_video() {
            if (this.video.mute) {
                this.video_preview_loading = true;
                await this.video.media.setEnabled(true);
                this.video_preview_loading = false;
            }
            else {
                this.video_preview_loading = true;
                await this.video.media.setEnabled(false);
                this.video_preview_loading = false;
            }
            this.video.mute = !this.video.mute;
        },
        async toggle_audio() {
            if (this.audio.mute) {
                console.log(this.audio.media, 'this.audio.media');
                await this.audio.media.setEnabled(true);
            }
            else {
                await this.audio.media.setEnabled(false);
            }
            this.audio.mute = !this.audio.mute;
        },
        joinRoom() {
            this.show = true
        },
        close() {
            this.$router.push("rooms");
            location.reload();
        }
    },

}
</script>

<style></style>