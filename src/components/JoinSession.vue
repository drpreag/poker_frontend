/* eslint-disable */
<template>
    <div class="container">

        <div class="card" style="min-height:400px">

            <div class="card-header">
                <h4>Join existing session</h4>
            </div>

            <div class="card-body" style="min-height:200px">
                <div>
                    Your name:<br> <input class="input" type="text" v-model="user_id">
                    &nbsp;<font color=red>*</font>
                </div>
                <br>
                <div>
                    Session #:<br><input class="input" type="number" v-model="id">
                    &nbsp;<font color=red>*</font>
                </div>
            </div>

            <div class="card-footer">
                <button v-show="user_id, id" class="btn btn-info" @click="joinSession">Join session</button>
                <br><br>
                Get session # from your scrum master / session admin
            </div>

        </div>

    </div>
</template>

<script>
import { SocketInstance } from '../main';
export default {
    name: 'JoinSession',
    data () {
        return {
            id: null,
            user_id: null,
            socket: SocketInstance,            
        }
    },  
    created () {
        if (this.$route.params.id) {
            this.id = Number(this.$route.params.id);
        }
    },      
    methods: {
        joinSession () {
            // send info to server: user joined session
            this.socket.emit ('session_joined', {session: Number(this.id), user: this.user_id});

            this.$router.push({
                name: 'session',
                params: { id: this.id, user_id: this.user_id }
            })            
        },        
    }
}
</script>
