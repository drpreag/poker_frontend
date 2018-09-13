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
export default {
    name: 'StartSession',
    data () {
        return {
            session: null,            
            username: null
        }
    },  
    methods: {
        randomNumber : function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        startSession () {
            // ask server for new random number session id
            // in dev use as we wish 
            this.session = this.randomNumber (10000,99999);

            this.$router.push({
                name: 'session',
                params: { session: this.session, username: this.username, admin: false }
            })
        }
    }
}
</script>

