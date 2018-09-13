/* eslint-disable */
<template>
    <div class="container">

        <div class="card">

            <div class="card-header">

                <div class="row">
                    <div class="col-md-4" align="left">
                        Session# <b><font color=red>{{ session }}</font></b>
                    </div>
                    <div class="col-md-4" align="center">
                        Voter: <b><font color=red>{{ username }}</font></b>
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
                        <div v-show="show_votes">
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
import socketio from 'socket.io-client';
import { SocketURL } from '../main.js';
export default {
    name: 'Session',
    data () {
        return {
            socket: null,
            session: null,            
            username: null,
            users: [],
            algorythm: 1,
            my_vote: null,            
            votes: [],
            admin: false,
            average: null,
            show_votes: false
        };
    },
    sockets: {
        connect() {
        },
        disconnect() {
        },
        votes (data) {
            this.votes=[];
            for (var i=0; i<data.length; i++) {
                this.votes.push ( { session: data[i].session, user: data[i].user, vote: data[i].vote } );
            }
            var avg_sum=0;
            var counter=0;
            for (i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==this.session && this.votes[i].vote != null) {
                    avg_sum = avg_sum + this.votes[i].vote;
                    counter++;
                }
            }
            this.average = Math.round (avg_sum / counter*100, 2)/100;
        },         
        session_started (data) {
            if (data.session == this.session) 
                if (data.user == this.username)
                    this.admin = true;
            // this.users.push ( { username: data.user, vote: null } ); 
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
            this.show_votes = false;
        }
    },
    created () {
        // session
        this.session = Number(this.$route.params.session);  
        // username
        if (this.$route.params.username) {
            this.username = this.$route.params.username;
        }
        else {
            this.$router.push({
                name: 'join-session',
                params: { session: this.session }
            });
        }
        // admin
        if (this.$route.params.admin)
            this.admin = this.$route.params.admin        
        
        this.socket = socketio(SocketURL);
    },    
    methods: {
        vote (voteValue) {
            this.my_vote = voteValue;
            // send voting info to server
            this.socket.emit ( 'voted', { session: this.session, user: this.username, vote: this.my_vote } );
        },     
        clearVotes () {
            this.my_vote = null;
            this.show_votes = false;
            this.socket.emit ( 'clear_votes', { session: this.session } );
        }, 
        showVotes () {
            var sorted = false;
            var stick = {};
            while (!sorted) {
                sorted = true;
                for (var j=0; j<this.votes.length-1; j++) {
                    if (this.votes[j].vote > this.votes[j+1].vote) {
                        stick.user = this.votes[j].user;
                        stick.vote = this.votes[j].vote;
                        this.votes[j].user = this.votes[j+1].user;
                        this.votes[j].vote = this.votes[j+1].vote;
                        this.votes[j+1].user = stick.user;
                        this.votes[j+1].vote = stick.vote;
                        sorted = false;
                    }
                }
            }           
            this.show_votes = true;
        },    
        leaveSession () {
            // push info to server that user is left
            this.socket.to(this.session).emit ( 'session_left', { session: this.session, user: this.username } );

            this.$router.push({
                name: 'dashboard'
            });            
        }                                      
    }
}
</script>
