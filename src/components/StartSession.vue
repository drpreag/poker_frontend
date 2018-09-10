/* eslint-disable */
<template>
    <div class="container">

        <div class="card" style="min-height:400px">

            <div class="card-header">
                <h4>Start fresh new poker session</h4>
            </div>

            <div class="card-body" style="min-height:200px">
                Your name: <br><input class="input" type="text" v-model="user_id">
                &nbsp;<font color=red>*</font>
            </div>

            <div class="card-footer">
                <button v-show="user_id" class="btn btn-info" @click="startSession">Start session</button>
                <br><br>
                You will be a session admin, <br>session will drop when you leave
            </div>

        </div>

    </div>
</template>

<script>
import { SocketInstance } from '../main';
export default {
    name: 'StartSession',
    data () {
        return {
            id: null,            
            user_id: null,
            socket: SocketInstance,
        }
    },  
    methods: {
        randomNumber : function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        startSession () {
            this.id = this.randomNumber (10000,99999);

            // send info to server: session created by user
            this.socket.emit ('session_started', {id: this.id, user: this.user_id} );

            this.$router.push({
                name: 'session',
                params: { id: this.id, user_id: this.user_id, admin: true }
            })
        }
    }
}
</script>

