/* eslint-disable */
<template>
    <div class="container">

        <div class="card">

            <div class="card-header">

                <div class="row">
                    <div class="col-md-4" align="left">
                        Session# <b><font color=red>{{ id }}</font></b>
                    </div>
                    <div class="col-md-4" align="center">
                        Voter: <b><font color=red>{{ user_id }}</font></b>
                    </div>
                    <div class="col-md-4" align="right">
                        Mode: <font color=red><b>{{ admin?"Scrum master":"Developer" }}</b></font>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-1" align="right">
                        Story: 
                    </div>
                    <div class="col-md-10" align="left">                    
                        <input type="text" class="form-control">
                    </div>
                </div>

            </div>
        
            <div class="row">

                <div class="col-md-3 card-body" style="min-height:100px" align="left">
                    <div v-show="!admin">
                        Vote by: 
                        {{ algorythm==1?"Mountain Goat":""}}
                        {{ algorythm==2?"Fibonacci":""}}
                        {{ algorythm==3?"T-Shirts":""}}
                    </div>

                    <div v-show="admin">
                        Vote by: 
                        <select class="input" v-model="algorythm">
                            <option value=1 selected>Mountain Goat</option>
                            <option value=2>Fibonacci</option>
                            <option value=3>T-Shirts</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-9 card-body" style="min-height:100px" align="left">
                    <div v-show="algorythm===1" >
                        <div class="btn-group btn-group-sm " role="group" align="left">
                            <button class="btn btn-info" @click="vote(0)">0 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(0.5)">0.5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(1)">1 pt</button>&nbsp;
                            <button class="btn btn-info" @click="vote(2)">2 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(3)">3 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(5)">5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(8)">8 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(13)">13 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(20)">20 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(40)">40 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(100)">100 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote('pass')">pass</button>
                        </div>
                    </div>

                    <div v-show="algorythm===2">
                        <div class="btn-group btn-group-sm" role="group" text-align="left">
                            <button class="btn btn-info" @click="vote(0)">0 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(1)">1 pt</button>&nbsp;
                            <button class="btn btn-info" @click="vote(2)">2 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(3)">3 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(5)">5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(8)">8 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(13)">13 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(21)">21 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(34)">34 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(55)">55 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote(89)">89 pts</button>&nbsp;
                            <button class="btn btn-info" @click="vote('pass')">pass</button>                    
                        </div>
                    </div>

                    <div v-show="algorythm===3">
                        <div class="btn-group btn-group-sm" role="group" text-align="left">
                            <button class="btn btn-info" @click="vote(0)">no size</button>&nbsp;
                            <button class="btn btn-info" @click="vote(1)">XS</button>&nbsp;
                            <button class="btn btn-info" @click="vote(2)">S</button>&nbsp;
                            <button class="btn btn-info" @click="vote(3)">M</button>&nbsp;
                            <button class="btn btn-info" @click="vote(4)">L</button>&nbsp;
                            <button class="btn btn-info" @click="vote(5)">XL</button>&nbsp;
                            <button class="btn btn-info" @click="vote(6)">XXL</button>&nbsp;
                            <button class="btn btn-info" @click="vote('pass')">pass</button>
                        </div>
                    </div>
                    <br>
                    <div>
                        Votes:
                        <div v-for="vote in votes">
                            <div class= "row">
                                <div class="col-md-2" align="right">
                                    {{ vote.user }}: 
                                </div>
                                <div class="col-md-2" align="left">
                                    <button class="btn btn-info btn-sm">{{ vote.vote }}</button>
                                </div>
                            </div>
                        </div>
                        <div v-show="average>0">
                            Average: {{ average }}
                        </div>                        
                    </div>
                </div>
            </div>

            <div class="card-footer" align="center">

                <div v-show="admin">
                    <button class="btn btn-sm btn-outline-success" @click="showVotes">Show votes</button>&nbsp;                    
                </div>
                <div v-show="!admin">
                    <button class="btn btn-sm btn-outline-warning" @click="leaveSession">Leave session</button>&nbsp;
                </div>
                <br>
                <div class="row">
                    <div v-show="admin" class="col-md-6">
                        <button class="btn btn-sm btn-outline-info" @click="clearVotes">Clear votes</button>&nbsp;
                    </div>

                    <div v-show="admin" class="col-md-6">
                        <button class="btn btn-sm btn-outline-danger" @click="showVotes">Delete session</button>&nbsp;
                    </div>                                                    
                </div>
                <br>

            </div>              

        </div>

    </div>
</template>

<script>
import { SocketInstance } from '../main';
export default {
    name: 'Session',
    data () {
        return {
            id: null,            
            user_id: null,
            users: [],
            algorythm: 1,
            fake: null,
            my_vote: null,            
            votes: [],
            admin: false,
            socket: SocketInstance,
            isConnected: null,
            socketMessage: null,
            message: {},
            average: null
        };
    },
    sockets: {
        connect() {
            // Fired when the socket connects.
            this.isConnected = true;
        },
        disconnect() {
            // Fired when the socket connects.
            this.isConnected = false;
        },
        votes (data) {
            this.votes=[];
            for (var i=0; i<data.length; i++) {
                this.votes.push ( { session: data[i].session, user: data[i].user, vote: data[i].vote } );
            }            
            // var change = false;
            // for (var i=0; i<data.length; i++) {
            //     change = false;
            //     for (var j=0; j<this.votes.length; j++) {
            //         // if (this.votes[j].user == data[i].user && this.votes[j].session == data[i].session) {
            //         if (this.votes[j].user == data[i].user && this.votes[j].session == this.id) {
            //             this.votes[j].vote = data[i].vote;
            //             change = true;
            //         }
            //     }
            //     if (! change)
            //         this.votes.push ( { session: data[i].session, user: data[i].user, vote: data[i].vote } );
            // }
            var avg_sum=0;
            var counter=0;
            for (var i=0; i<data.length; i++) {
                if (this.votes[i].session==this.id && this.votes[i].vote != null) {
                    avg_sum = avg_sum + this.votes[i].vote;
                    counter++;
                }
            }
            this.average = avg_sum / counter;
            // this.votes=data;
        },
        // clear_votes (data) {
        //     this.votes=[];
        //     for (i=0; i<data.length; i++) {
        //         votes.push ( { session: data.session, user: data.user, vote: data.vote } );
        //     }
        // },          
        session_started (data) {
            if (data.id == this.id) 
                if (data.user == this.user_id)
                    this.admin = true;
            // this.users.push ( { user_id: data.user, vote: null } ); 
            // console.log (this.users);
        },        
        session_joined (data) {
            this.votes = data;
        },        
    },
    watch: {
        algorythm () {
            this.clearVotes();
            this.algorythm = Number(this.algorythm);
        }
    },
    created () {
        this.id = Number(this.$route.params.id);  
        if (this.$route.params.user_id) {
            this.user_id = this.$route.params.user_id;
        }
        else {
            this.$router.push({
                name: 'join-session',
                params: { id: this.id }
            });
        }
        if (this.$route.params.admin)
            this.admin = this.$route.params.admin        
        this.socket = SocketInstance;
    },    
    methods: {
        vote (voteValue) {
            this.my_vote = voteValue;
            // send voting info to server
            this.socket.emit ( 'voted', { session: this.id, user: this.user_id, vote: this.my_vote } );
        },     
        clearVotes () {
            this.my_vote = null;
            this.socket.emit ( 'clear_votes', { session: this.id } );
        }, 
        showVotes () {
            
        },    
        leaveSession () {
            // push info to server that user is left
            this.socket.emit ( 'session_left', { session: this.id, user: this.user_id } );

            this.$router.push({
                name: 'dashboard'
            });            
        }                                      
    }
}
</script>
