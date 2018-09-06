<template>
    <div class="container">

        <div class="card" style="min-height:400px">

            <div class="card-header">
                <h4>Join existing session</h4>
            </div>

            <div class="card-body" style="min-height:200px">
                <div>
                    Your name:<br> <input class="input" type="text" v-model="user_id"> *
                </div>
                <br>
                <div>
                Session #:<br><input class="input" type="text" v-model="session_id"> *
                </div>
            </div>

            <div class="card-footer">
                <button v-show="user_id, session_id" class="btn btn-info" @click="joinSession">Join session</button>
                <br><br>
                Get session # from your scrum master / session admin
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            user_id: null,
            session_id: null,
        }
    },  
    components: {
    },
    methods: {
        joinSession () {
        },        
    }
}
</script>
