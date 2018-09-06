<template>
    <div class="container">

        <h3>Scrum refinement session</h3>
        <img src="../../static/cards.jpg">
        <h4>To estimate your stories</h4>
        <br>
     
        <div class="jumbotron row">
            <div class="col">
              start fresh new poker session
              <div class="card-body">
                <router-link to="/start-session">
                    <button class="button is-info is-medium is-rounded">Start</button>
                </router-link>
            </div>
            </div>
            or
            <div class="col">
              join existing session
              <div class="card-body">
                <router-link to="/join-session">
                    <button class="button is-info is-medium is-rounded">Join</button>
                </router-link>    
            </div>
            </div>
            <br>
        </div>

     </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            session_id: null,
        }
    },  
    components: {
    }
}
</script>
