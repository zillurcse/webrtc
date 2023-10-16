<template>
    <div class="h-[90vh] py-14">

        <div class="w-3/4 mx-auto" id="box">
            <div class="flex w-full justify-between">
                <div class="w-[65%]">
                    <div id="userVideo" class="video border-2 border-prim-dark rounded-lg h-[60vh] w-full "
                        v-show="!video.mute">

                    </div>
                    <div v-show="video.mute"
                        class=" border-2 border-prim-dark bg-gray flex justify-center items-center flex-col gap-5 text-white text-base rounded-lg h-[60vh] w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-16 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <h3 class="text-2xl font-semibold ">
                            {{ uName }}
                        </h3>
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
                        <button class="w-16 h-16 rounded-full border  flex justify-center items-center text-white bg-error"
                            @click="leave_room">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                height="9px" viewBox="0 0 24 9" version="1.1">
                                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Rounded" transform="translate(-202.000000, -1223.000000)">
                                        <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                            <g id="-Round-/-Communication-/-call_end"
                                                transform="translate(102.000000, 54.000000)">
                                                <g transform="translate(0.000000, 0.000000)" id="Path">
                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                    <path
                                                        d="M4.51,15.48 L6.51,13.89 C6.99,13.51 7.27,12.93 7.27,12.32 L7.27,9.72 C10.29,8.74 13.56,8.73 16.59,9.72 L16.59,12.33 C16.59,12.94 16.87,13.52 17.35,13.9 L19.34,15.48 C20.14,16.11 21.28,16.05 22,15.33 L23.22,14.11 C24.02,13.31 24.02,11.98 23.17,11.23 C16.76,5.57 7.1,5.57 0.69,11.23 C-0.16,11.98 -0.16,13.31 0.64,14.11 L1.86,15.33 C2.57,16.05 3.71,16.11 4.51,15.48 Z"
                                                        fill="#fff" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <!-- <button
                            class="w-16 h-16 rounded-full border border-prim-dark flex justify-center items-center text-prim-dark">
                            users {{ allUserCount }}
                        </button> -->
                    </div>

                </div>
                <!-- <div v-for="(part, index) in participants" :key="'media' + index" class="Camera">
                    <MeetingMediaBox :part="part" :ref="'meetingBox' + index" :index="index" />
                </div> -->
                <div v-if="participants.length > 0" class="w-[25%] h-[90vh] overflow-y-auto">
                    <div class="border-2 border-prim-dark rounded-lg h-52 w-full mb-4 " id="remot"></div>
                </div>
                <div v-else class="w-[30%] flex items-center justify-center">
                    <p>Only you are in the room</p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import AgoraRTC from "agora-rtc-sdk-ng"
// import MeetingMediaBox from "./MeetingMediaBox.vue"

export default {
    props: ['audio', 'video', 'uid', 'uName'],
    // components: { MeetingMediaBox },

    data() {
        return {
            isVideoMute: false,
            isAudioMute: false,
            channel: '',  // add your channel name
            appId: '', // add your appId
            agora_token: '', // add your  agora_token
            channelParameters: {
                localAudioTrack: null,
                localVideoTrack: null,
                remoteVideoTrack: null,
                remoteAudioTrack: null,
                remoteUid: null,
            },
            participants: [],
            localParticipants: [],
            allUsers: [],
            allUserCount: null,
            hasView: false

        };
    },

    mounted() {
        if (!this.hasView) {
            this.connectToRoom();

            this.hasView = true
        }

        console.log('i am there');
    },



    methods: {


        async connectToRoom(eventsCallback) {

            // Set up the signaling engine with the provided App ID, UID, and configuration
            let agoraEngine = null
            const setupAgoraEngine = async () => {
                agoraEngine = new AgoraRTC.createClient({ mode: "rtc", codec: "vp9" });
            };

            await setupAgoraEngine();

            const getAgoraEngine = () => {
                return agoraEngine;
            };
            await agoraEngine.join(
                this.appId, this.channel, this.agora_token, null
            );
            console.log(getAgoraEngine, eventsCallback);
            agoraEngine.on("user-joined", async (user) => {
                console.log(user, 'user-joined');
                this.participants.push(user)



                console.log('oh there');
                this.allUsers = this.localParticipants.concat(this.participants);
                console.log('this.allUsers from parti', this.allUsers);
                this.allUserCount = this.allUsers.reduce(function (accumulator) {
                    return accumulator + 1;
                }, 0);
            });
            agoraEngine.on("user-published", async (user, mediaType) => {
                // Subscribe to the remote user when the SDK triggers the "user-published" event.
                await agoraEngine.subscribe(user, mediaType);
                user.videoTrack.play('remot');
                console.log("subscribe success", user, mediaType);
            });

            // Listen for the "user-unpublished" event.
            agoraEngine.on("user-unpublished", (user) => {
                console.log(user.uid + "has user-unpublished the channel");
            });
            agoraEngine.on("user-left", user => {
                console.log(user.uid + "has left the channel");

                this.participants.splice(user, 1);
                console.log(this.participants);

            }),


                // Create a local audio track from the audio sampled by a microphone.
                this.channelParameters.localAudioTrack =
                await AgoraRTC.createMicrophoneAudioTrack();
            // Create a local video track from the video captured by a camera.
            this.channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

            await getAgoraEngine().publish([
                this.channelParameters.localAudioTrack,
                this.channelParameters.localVideoTrack,
            ]);


            if (this.video.mute) {
                await this.channelParameters.localVideoTrack.stop()
                await this.channelParameters.localVideoTrack.setEnabled(false);
                console.log('v off');
            } else {
                console.log('v on');
                this.channelParameters.localVideoTrack.play('userVideo');
                await this.channelParameters.localVideoTrack.setEnabled(true);
            }
            if (this.audio.mute) {
                await this.channelParameters.localAudioTrack.stop()
                await this.channelParameters.localAudioTrack.setEnabled(false);
            } else {
                await this.channelParameters.localAudioTrack.play()
                await this.channelParameters.localAudioTrack.setEnabled(true);
            }
        },




        async toggle_video() {
            if (this.video.mute) {
                this.video_preview_loading = true;
                this.channelParameters.localVideoTrack.play('userVideo');
                await this.channelParameters.localVideoTrack.setEnabled(true);
                console.log('if');
                this.video_preview_loading = false;

            }
            else {
                this.video_preview_loading = true;
                this.channelParameters.localVideoTrack.play('userVideo');
                await this.channelParameters.localVideoTrack.stop();
                await this.channelParameters.localVideoTrack.setEnabled(false);
                console.log('else');
                this.video_preview_loading = false;
            }
            this.$emit('muteVideo');

            this.isVideoMute = !this.isVideoMute

        },
        async toggle_audio() {
            if (this.audio.mute) {
                console.log(this.audio.media, 'this.audio.media');
                await this.channelParameters.localAudioTrack.play()

                await this.channelParameters.localAudioTrack.setEnabled(true);
            }
            else {
                await this.channelParameters.localAudioTrack.setEnabled(false);
            }
            this.$emit('muteAudio');
            this.isAudioMute = !this.isAudioMute
        },
        leave_room() {
            location.reload();
        },

    },
}
</script>

<style></style>