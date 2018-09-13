/* eslint-disable */
<template>
    <div class="container">

        <div class="card" style="min-height:400px">

            <div class="card-header">
                <h4>Join existing session</h4>
            </div>

            <div class="card-body" style="min-height:200px">
                <div>
                    Your name:<br> <input class="input" type="text" v-model="username">
                    &nbsp;<font color=red>*</font>
                </div>
                <br>
                <div>
                    Session #:<br><input class="input" type="number" v-model="session">
                    &nbsp;<font color=red>*</font>
                </div>
            </div>

            <div class="card-footer">
                <button v-show="username, session" class="btn btn-info" @click="joinSession">Join session</button>
                <br><br>
                Get session # from your scrum master / session admin
            </div>

        </div>

    </div>
</template>

<script>
//import { SocketInstance } from '../main';
export default {
    name: 'JoinSession',
    data () {
        return {
            session: null,
            username: null
        }
    },  
    created () {
        if (this.$route.params.session) {
            this.session = Number(this.$route.params.session);
        }
    },      
    methods: {
        joinSession () {
            // check on a server if session exists
            // if does exist proceed with joining

            //check if username is unique over a session
            // do not allow duplicated usernames

            this.$router.push({
                name: 'session',
                params: { session: this.session, username: this.username, admin: false }
            })            
        },        
    }
}
</script>
