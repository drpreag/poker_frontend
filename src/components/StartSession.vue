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
            // URL: SocketURL,
            socket: SocketInstance,            
            session: null,            
            username: null
        }
    },    
    methods: {
        startSession () {
            axios
                .post(SocketURL + '/api/sessions/', 
                    { username : this.username }, 
                    { responseType: 'json', crossdomain: true } )  // eslint-disable-line no-console
                .then(response => {
                    this.session = response.data.session;   // new session id
                    // push to route  /session/:session:/username route
                    this.$router.push({
                        name: 'session',
                        params: { session: this.session, username: this.username }
                    });                    
                })
                .catch((err) => {
                    console.error(err);
                });

        }
    }
}
</script>

