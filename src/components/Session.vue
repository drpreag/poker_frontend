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
                        <input type="text" class="form-control" v-model="story" @change="change_story()">
                    </div>
                </div>

            </div>
        
            <div class="row">

                <div class="col-md-3 card-body" style="min-height:100px" align="left">
                    <div v-show="false">
                        Vote by: 
                        {{ algorythm==1?"Mountain Goat":""}}
                        {{ algorythm==2?"Fibonacci":""}}
                        {{ algorythm==3?"T-Shirts":""}}
                    </div>

                    <div>
                        Vote by: 
                        <select class="input" v-model="algorythm" @change="change_algorythm()">
                            <option value=1 selected>Mountain Goat</option>
                            <option value=2>Fibonacci</option>
                            <option value=3>T-Shirts</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-9 card-body" style="min-height:100px" align="left">
                    <div v-show="algorythm===1" >
                        <div class="btn-group btn-group-sm " role="group" align="left">
                            <button class="btn btn-info" @click="voted(0)">0 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(0.5)">0.5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(1)">1 pt</button>&nbsp;
                            <button class="btn btn-info" @click="voted(2)">2 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(3)">3 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(5)">5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(8)">8 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(13)">13 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(20)">20 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(40)">40 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(100)">100 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted('pass')">pass</button>
                        </div>
                    </div>

                    <div v-show="algorythm===2">
                        <div class="btn-group btn-group-sm" role="group" text-align="left">
                            <button class="btn btn-info" @click="voted(0)">0 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(1)">1 pt</button>&nbsp;
                            <button class="btn btn-info" @click="voted(2)">2 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(3)">3 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(5)">5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(8)">8 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(13)">13 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(21)">21 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(34)">34 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(55)">55 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(89)">89 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted('pass')">pass</button>                    
                        </div>
                    </div>

                    <div v-show="algorythm===3">
                        <div class="btn-group btn-group-sm" role="group" text-align="left">
                            <button class="btn btn-info" @click="voted(0)">no size</button>&nbsp;
                            <button class="btn btn-info" @click="voted(1)">XS</button>&nbsp;
                            <button class="btn btn-info" @click="voted(2)">S</button>&nbsp;
                            <button class="btn btn-info" @click="voted(3)">M</button>&nbsp;
                            <button class="btn btn-info" @click="voted(4)">L</button>&nbsp;
                            <button class="btn btn-info" @click="voted(5)">XL</button>&nbsp;
                            <button class="btn btn-info" @click="voted(6)">XXL</button>&nbsp;
                            <button class="btn btn-info" @click="voted('pass')">pass</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6">
                            Votes: 
                            <div v-for="(vote, index) in votes" :key="index">
                                <div class= "row">
                                    <div class="col-md-2" align="right">
                                        {{ vote.username }}: 
                                    </div>
                                    <div v-show="show_votes" class="col-md-4" align="left">
                                        <button class="btn btn-info btn-sm">{{ vote.vote }}</button>
                                    </div>
                                    <div v-show="!show_votes" class="col-md-4" align="left">
                                        <button v-if="vote.vote!=null" class="btn btn-info btn-sm">voted</button>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div v-show="show_votes" class="col-md-6">
                            Average: {{ average }} <br>
                            Median: {{ median }}<br>
                            Lowest: {{ lowest }}<br>
                            Highest: {{ highest }}<br>                        
                        </div>                        
                        <div v-show="show_votes">

                        </div>                        
                    </div>
                    
                </div>
            </div>

            <div class="card-footer" align="center">
                <div>
                    {{ ticker }}
                </div>     
                <div>&nbsp;
                </div>                           
                <div class="row">
                    <div class="col-md-4">
                        <button class="btn btn-sm btn-outline-success" @click="show_all_votes">Show votes</button>&nbsp;                    
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-sm btn-outline-info" @click="clear_votes">Clear votes</button>&nbsp;
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-sm btn-outline-warning" @click="session_left">Leave session</button>&nbsp;
                    </div>                    
                </div>
            </div>              

        </div>

    </div>
</template>


<script>
import { SocketInstance } from '../main.js';
import { SocketURL } from '../main.js';
import axios from 'axios';

// const https = require('https');

export default {
    name: 'Session',
    data () {
        return {
            socket: SocketInstance,
            session: null,            
            username: null,
            users: [],
            algorythm: 1,
            my_vote: null,            
            votes: [],
            admin: false,
            show_votes: false,
            ticker: null,
            story: null,
            // statistics
            average: null,
            median: null,
            lowest: null,
            highest: null,            
        };
    },
    created () {
        // listen on session_left
        this.socket.on ('session_left', (data) => {
            for (var i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==data.session && this.votes[i].username==data.username) {
                    this.votes.splice (i,1);                
                    this.ticker = "User " + data.username + " has left a session";                    
                }
            }                 
        })

        // listen on session_joined
        this.socket.on ('session_joined', (data) => {
            var updated = false;

            for (var i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==data.session && this.votes[i].username==data.username) {
                    this.votes[i].vote = null;
                    updated = true;
                }
            }                 
            if (!updated)
                this.votes.push ({ session: data.session, username: data.username, vote: null });
            this.ticker = "User " + data.username + " joined a session";
        })

        // listen on voted
        this.socket.on ('voted', (data) => {
            var updated = false;
            for (var i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==data.session && this.votes[i].username==data.username ) {
                    if (data.vote)
                        this.votes[i].vote = data.vote;
                    else
                        this.votes[i].vote = null;
                    updated = true;
                }
            }            
            if (!updated)
                this.votes.push ({ session: data.session, username: data.username, vote: data.vote});
            var missing = false;            
            for (i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==this.session && this.votes[i].vote == null) {
                    missing = true;
                }
            }
            if (! missing)
                // this.show_votes = true;
                this.count_statistics();
            this.ticker = "User " + data.username + " voted";

        })

        // listen on clear_votes
        this.socket.on ('clear_votes', (data) => {
            if (data.session == this.session) {            
                for (var i=0; i<this.votes.length; i++) {
                    this.votes[i].vote = null;
                }
                this.average = null;
                this.show_votes = false;
                this.ticker = "User " + data.username + " cleared all votes";
            }
        })

        // listen on agorythm
        this.socket.on ('change_algorythm', (data) => {
            if (data.session == this.session) {
                this.algorythm = Number(data.algorythm);
                for (var i=0; i<this.votes.length; i++) {
                    this.votes[i].vote = null;
                }
                this.average = null;
                this.ticker = "User " + data.username + " changed algorythm to " + data.algorythm;
            }
        })        

        // listen on change_story
        this.socket.on ('change_story', (data) => {
            if (data.session == this.session) {
                this.story = data.story;
                this.ticker = "User " + data.username + " changed story name " + data.story;
            }
        }) 

        // listen on show_all_votes
        this.socket.on ('show_all_votes', (data) => {
            if (data.session == this.session) {
                // this.show_votes = true;
                this.count_statistics();
                this.ticker = "User " + data.username + " showed votes";
            }
        }) 

        // session id
        this.session = this.$route.params.session;
        // username
        if (this.$route.params.username) {
            this.username = this.$route.params.username;
            // start and join session
            // this.session_started ( { session: this.session, username: this.username, vote:null } );
            this.session_joined ( { session: this.session, username: this.username, vote:null } );
        }
        else {
            this.$router.push({
                name: 'join-session',
                params: { session: this.session }
            });
        } 
    },    
    mounted () {
        // get all current votes through api call
        var json_response = [];
        axios
            .get(SocketURL + '/session/'+this.session+'/votes', { responseType: 'json', crossdomain: true })
            .then(response => {
                json_response = response.data;
                this.votes = [];
                for (var i=0; i<json_response.length; i++) {
                     if (json_response[i].session == this.session) {
                        this.votes.push ({session: json_response[i].session, username: json_response[i].username, vote: json_response[i].vote });
                    }
                } 
            })
            .catch((err) => {
                console.log("Error in axios get: ", err); // eslint-disable-line no-console
            });
        axios
            .get(SocketURL + '/session/'+this.session+'/algorythm', { responseType: 'json', crossdomain: true })
            .then(response => {
                json_response = response.data;
                this.algorythm = response.data.algorythm;
            })
            .catch((err) => {
                console.log("Error in axios get: ", err); // eslint-disable-line no-console
            });                        
    },
    methods: {
        session_started () {
            this.votes.push ( {session: this.session, username: this.username, vote: null } );
            // notify server that session is started
            this.socket.emit ( 'session_started', { session: this.session, username: this.username, vote: null} );
        },         
        session_joined () {
            // notify server that user is joined
            this.socket.emit ( 'session_joined', { session: this.session, username: this.username, vote: null } );
        },  
        session_left () {        
            // notify server that user has left
            this.socket.emit ( 'session_left', { session: this.session, username: this.username } );
            this.$router.push({
                name: 'dashboard'
            });
        },
        voted (voteValue) {
            this.my_vote = voteValue;
            var data = { session: this.session, username: this.username, vote: this.my_vote };
            var created = false;
            for (var i=0; i<this.votes.length; i++) {
                if (this.votes[i].session == data.session && this.votes[i].username == this.username) {
                    this.votes[i].vote = voteValue;
                    created = true;
                }
            }             
            if (!created)
                this.votes.push ( { session: this.session, username: this.username, vote: this.my_vote } );

            this.socket.emit ( 'voted', data );
            // if all have voted show all votes
            var missing = false;            
            for (i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==this.session && this.votes[i].vote == null) {
                    missing = true;
                }
            }
            if (! missing && this.votes.length>1)
                this.count_statistics();
                // this.show_votes = true;            
        },     
        clear_votes () {
            this.my_vote = null;
            this.show_votes = false;
            for (var i=0; i<this.votes.length; i++) {
                this.votes[i].vote = null;
            }
            this.average = null;
            this.socket.emit ( 'clear_votes', {session: this.session, username: this.username} );            
        }, 
        change_algorythm () {
            this.algorythm = Number(this.algorythm);
            this.my_vote = null;
            this.show_votes = false;            
            for (var i=0; i<this.votes.length; i++) {
                this.votes[i].vote = null;
            }            
            this.average = null;
            this.socket.emit ( 'change_algorythm', {session: this.session, username: this.username, algorythm: this.algorythm} );
        },  
        change_story () {
            this.algorythm = Number(this.algorythm);
            this.socket.emit ( 'change_story', {session: this.session, username: this.username, story: this.story} );
        }, 
        show_all_votes () {
            this.socket.emit ( 'show_all_votes', {session: this.session, username: this.username} );
            this.count_statistics ();            
        },
        count_statistics () {

            // sorting array
            var sorted = false;
            var stick = {};
            while (!sorted) {
                sorted = true;
                for (var i=0; i<this.votes.length-1; i++) {
                    if (this.votes[i].vote > this.votes[i+1].vote) {
                        stick.user = this.votes[i].user;
                        stick.vote = this.votes[i].vote;
                        this.votes[i].user = this.votes[i+1].user;
                        this.votes[i].vote = this.votes[i+1].vote;
                        this.votes[i+1].user = stick.user;
                        this.votes[i+1].vote = stick.vote;
                        sorted = false;
                    }
                }
            }

            // lowest
            for (i=0; i<this.votes.length-1; i++) {            
                if (this.votes[i].vote != "pass") {
                    this.lowest = this.votes[i].vote;
                    break;
                }
            }

            // highest
            for (i=this.votes.length-1; i>=0; i--) {
                if (this.votes[i].vote != "pass") {
                    this.highest = this.votes[i].vote;
                    break;
                }
            }

            // average
            var counter = 0;
            var avg_sum = 0.00;
            for (i=0; i<this.votes.length; i++) {
                if (this.votes[i].vote != "pass") {
                    counter++;
                    avg_sum += this.votes[i].vote;
                }
            }
            this.average = Math.round (avg_sum / counter*100, 2)/100;

            //median
            var half = Math.floor(this.votes.length/2);
            if(this.votes.length % 2)
                this.median = this.votes[half].vote;
            else
                this.median = (this.votes[half-1].vote + this.votes[half].vote) / 2.0;
            
            this.show_votes = true;            
        }
    }
}
</script>