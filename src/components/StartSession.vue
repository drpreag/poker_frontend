<template>
    <div class="container">

        <div class="card" style="min-height:400px">

            <div class="card-header">
                <h4>Start fresh new poker session</h4>
            </div>

            <div class="card-body" style="min-height:200px">
                Your name:<br> <input class="input" type="text" v-model="user_id"> *
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
export default {
    name: 'home',
    data () {
        return {
            user_id: null,
            session_id: null
        }
    },  
    components: {
    },
    methods: {
        startSession () {
        },
    }
}
</script>
