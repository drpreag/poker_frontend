/* eslint-disable */
<template>
    <div class="container">

        <div class="card" style="min-height:400px">

            <div class="card-header">
                <h4>Start fresh new poker session</h4>
            </div>

            <div class="card-body" style="min-height:200px">
                Your name: <br><input id="username" class="input" type="text" v-model="username">
                &nbsp;<font color=red>*</font>
            </div>

            <div class="card-footer">
                <button v-show="username" id="start" class="btn btn-info" @click="startSession">Start session</button>
                <br><br>
                You will be a session admin/scrum master
            </div>

        </div>

    </div>
</template>

<script>
import { SocketInstance } from '../main.js';
import { SocketURL } from '../main.js';
import axios from 'axios'

export default {
    name: 'StartSession',
    data () {
        return {
            socket: SocketInstance,            
            session: null,            
            username: null
        }
    },      
    mounted () {
        // ask server for new random number session id
        // in dev use as we wish 
        this.session = this.randomNumber (10000,99999);
    },      
    methods: {
        randomNumber : function(min, max) {
            var session = null;
            var exists = true;

            while (exists) {
                // random session number
                session = Math.floor(Math.random() * (max - min + 1)) + min;
                // check if session exist in backend
                exists = false;
                axios
                    .get(SocketURL + '/session/' + session, { crossdomain: true })
                    .then(response => {
                        exists = response.data.exists;
                    })
                    .catch((err) => {
                        console.error("Error in randomNumber method: " + session + " ; " + exists + ", Err: " + err);  // eslint-disable-line no-console
                    });  
            }
            return session;
        },
        startSession () {
            // notify server that session is started            
            this.socket.emit ( 'session_started', { session: this.session, username: this.username, vote: null} );            
            // go to /session route
            this.$router.push({
                name: 'session',
                params: { session: this.session, username: this.username, admin: false }
            });
        }
    }
}
</script>

