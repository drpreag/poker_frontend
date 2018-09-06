/* eslint-disable */
<template>
    <div class="container-fluid">

        <div class="card" style="min-height:500px">

            <div class="card-header">
                <h5>Session #<b>{{ id }}</b>, voter: <b>{{ user_id }}</b></h5>
                <div class="row">
                    <div class="col-sm-1" align="right">
                        Story: 
                    </div>
                    <div class="col">                    
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>

            <div v-show="algorythm===1">
                Vote by Mountain goat array:<br>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button class="btn btn-info" @click="vote(0)">0 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(0.5)">0.5 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(1)">1 pt</button>&nbsp
                    <button class="btn btn-info" @click="vote(2)">2 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(3)">3 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(5)">5 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(8)">8 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(13)">13 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(20)">20 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(40)">40 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(100)">100 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote('pass')">pass</button>
                </div>
            </div>

            <div v-show="algorythm===2">
                Vote by Fibonacci array:<br>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button class="btn btn-info" @click="vote(0)">0 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(1)">1 pt</button>&nbsp
                    <button class="btn btn-info" @click="vote(2)">2 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(3)">3 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(5)">5 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(8)">8 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(13)">13 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(21)">21 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(34)">34 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(55)">55 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote(89)">89 pts</button>&nbsp
                    <button class="btn btn-info" @click="vote('pass')">pass</button>                    
                </div>
            </div>

            <div v-show="algorythm===3">
                Vote by T-Shirt array:<br>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button class="btn btn-info" @click="vote(0)">no size</button>&nbsp
                    <button class="btn btn-info" @click="vote(1)">XS</button>&nbsp
                    <button class="btn btn-info" @click="vote(2)">S</button>&nbsp
                    <button class="btn btn-info" @click="vote(3)">M</button>&nbsp
                    <button class="btn btn-info" @click="vote(4)">L</button>&nbsp
                    <button class="btn btn-info" @click="vote(5)">XL</button>&nbsp
                    <button class="btn btn-info" @click="vote(6)">XXL</button>&nbsp
                    <button class="btn btn-info" @click="vote('pass')">pass</button>
                </div>
            </div>

            <br>&nbsp<br>
            <div>
                My Vote: {{ my_vote }}
            </div>

            <br>&nbsp<br>
            <div>
                All votes: 
            </div>

            <div class="card-footer">

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'VoteRoom',
    props: [ 'session_id' ],
    data () {
        return {
            user_id: null,
            id: null,
            algorythm: null,
            my_vote: null,            
        }
    },  
    created () {
        this.user_id = this.$route.params.user_id;
        this.id = Number(this.$route.params.id);
        this.algorythm = Number(this.$route.params.algorythm);
    },    
    methods: {
        vote (voteValue) {
            this.my_vote = voteValue;
        },        
    }
}
</script>
