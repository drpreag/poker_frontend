/* eslint-disable */
<template>
    <div class="container">

        <h3>Agile / Scrum</h3>
        <img src="../../static/cards.jpg">
        <h4>Sprint refinement session</h4>
        <br>
     
        <div class="row jumbotron">
            <div class="col-md-5">
                start fresh new session
                <div class="card-body">
                    <router-link to="/start-session">
                        <button class="button is-info is-medium is-rounded">Start</button>
                    </router-link>
                </div>
            </div>
            <div class="col-md-2">
                or
            </div>            
            <div class="col-md-5">
                join existing session
                <div class="card-body">
                    <router-link to="/join-session">
                        <button class="button is-info is-medium is-rounded">Join</button>
                    </router-link>    
                </div>
            </div>
        </div>

     </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
        }
    },  
    components: {
    },
}
</script>
