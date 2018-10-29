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
                        <div class="btn-group btn-group-sm" role="group" align="left">
                            <button class="btn btn-info" @click="voted(0)" :class="{active: my_vote===0}">0 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(0.5)" :class="{active: my_vote===0.5}">0.5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(1)" :class="{active: my_vote===1}">1 pt</button>&nbsp;
                            <button class="btn btn-info" @click="voted(2)" :class="{active: my_vote===2}">2 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(3)" :class="{active: my_vote===3}">3 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(5)" :class="{active: my_vote===5}">5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(8)" :class="{active: my_vote===8}">8 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(13)" :class="{active: my_vote===13}">13 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(20)" :class="{active: my_vote===20}">20 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(40)" :class="{active: my_vote===40}">40 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(100)" :class="{active: my_vote===100}">100 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted('pass')">pass</button>
                        </div>
                    </div>
                    <div v-show="algorythm===2">
                        <div class="btn-group btn-group-sm" role="group" text-align="left">
                            <button class="btn btn-info" @click="voted(0)" :class="{active: my_vote===0}">0 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(1)" :class="{active: my_vote===1}">1 pt</button>&nbsp;
                            <button class="btn btn-info" @click="voted(2)" :class="{active: my_vote===2}">2 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(3)" :class="{active: my_vote===3}">3 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(5)" :class="{active: my_vote===5}">5 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(8)" :class="{active: my_vote===8}">8 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(13)" :class="{active: my_vote===13}">13 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(21)" :class="{active: my_vote===21}">21 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(34)" :class="{active: my_vote===24}">34 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(55)" :class="{active: my_vote===55}">55 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted(89)" :class="{active: my_vote===89}">89 pts</button>&nbsp;
                            <button class="btn btn-info" @click="voted('pass')">pass</button>                    
                        </div>
                    </div>
                    <div v-show="algorythm===3">
                        <div class="btn-group btn-group-sm" role="group" text-align="left">
                            <button class="btn btn-info" @click="voted(0)" :class="{active: my_vote===0}">no size</button>&nbsp;
                            <button class="btn btn-info" @click="voted(1)" :class="{active: my_vote===1}">XS</button>&nbsp;
                            <button class="btn btn-info" @click="voted(2)" :class="{active: my_vote===2}">S</button>&nbsp;
                            <button class="btn btn-info" @click="voted(3)" :class="{active: my_vote===3}">M</button>&nbsp;
                            <button class="btn btn-info" @click="voted(4)" :class="{active: my_vote===4}">L</button>&nbsp;
                            <button class="btn btn-info" @click="voted(5)" :class="{active: my_vote===5}">XL</button>&nbsp;
                            <button class="btn btn-info" @click="voted(6)" :class="{active: my_vote===6}">XXL</button>&nbsp;
                            <button class="btn btn-info" @click="voted('pass')">pass</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6">
                            <div v-for="(vote, index) in votes" :key="index">
                                <div class= "row">
                                    <div class="col-md-3" align="right">
                                        {{ vote.username }}: 
                                    </div>
                                    <div v-show="show_votes" class="col-md-3" align="left">
                                        <button class="btn btn-info btn-sm">{{ vote.vote }}</button>
                                    </div>
                                    <div v-show="!show_votes" class="col-md-3" align="left">
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
import myStatsModule from '../myStatsModule.js';
// const https = require('https');

export default {
    name: 'Session',
    data () {
        return {
            // SocketURL: process.env.SocketURL,            
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
            // statistical data
            average: null,
            median: null,
            lowest: null,
            highest: null,            
        };
    },
    created () {
        if (isNaN(this.$route.params.session)) {
            return "Invalid session number";
        }
        this.session = this.$route.params.session;
        this.username = this.$route.params.username;

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
            this.getVotes(this.session);
            this.ticker = "User " + data.username + " joined a session";
        })

        // listen on voted
        this.socket.on ('voted', (data) => {
            this.getVotes(this.session);            
            var missing = false;            
            for (var i=0; i<this.votes.length; i++) {
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
                this.my_vote = null;
                this.average = null;
                this.show_votes = false;
                this.ticker = "User " + data.username + " cleared all votes";
            }
        })

        // listen on session data change
        this.socket.on ('changed_session', (data) => {
            this.getSession (this.session);
        }) 

        // listen on show_all_votes
        this.socket.on ('show_all_votes', (data) => {
            if (data.session == this.session) {
                // this.show_votes = true;
                this.count_statistics();
                this.ticker = "User " + data.username + " showed all votes";
            }
        }) 

        this.session_joined ( { session: this.session, username: this.username, vote: null } );
    },    
    mounted () {
        this.getSession (this.session);
        this.getVotes (this.session);
    },
    methods: {
        getSession (session) {
        // get current session data through api call 
            var json_response = [];        
            axios
                .get(SocketURL + '/api/sessions/'+session, { responseType: 'json', crossdomain: true })
                .then(response => {
                    json_response = response.data;
                    this.algorythm = response.data.algorythm;
                    this.story = response.data.story;
                })
                .catch((err) => {
                    console.log("Error in axios get: ", err); // eslint-disable-line no-console
                })
        },
        getVotes (session) {
        // get all current votes through api call
            var json_response = [];
            axios
                .get(SocketURL + '/api/sessions/'+session+'/votes', { responseType: 'json', crossdomain: true })
                .then(response => {
                    json_response = response.data;
                    this.votes = [];
                    for (var i=0; i<json_response.length; i++) {
                         if (json_response[i].session == session) {
                            this.votes.push ({session: json_response[i].session, username: json_response[i].username, vote: json_response[i].vote });
                        }
                    } 
                })
                .catch((err) => {
                    console.log("Error in axios get: ", err); // eslint-disable-line no-console
                });
        },
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
        change_session () {
            this.algorythm = parseInt(this.algorythm);
            this.my_vote = null;
            this.show_votes = false;
            for (var i=0; i<this.votes.length; i++) {
                this.votes[i].vote = null;
            }            
            this.average = null;
            this.socket.emit ( 'changed_session', {session: this.session} );
        },               
        show_all_votes () {
            // if all have voted then show all votes
            var missing = false;            
            for (var i=0; i<this.votes.length; i++) {
                if (this.votes[i].session==this.session && this.votes[i].vote == null) {
                    missing = true;
                }
            }
            if (! missing && this.votes.length>1) {
                this.socket.emit ( 'show_all_votes', {session: this.session, username: this.username} );
                this.count_statistics ();
            }
        },
        count_statistics () {
            myStatsModule.sortVotes(this.votes);

            this.lowest = myStatsModule.lowestVote(this.votes);
            this.highest = myStatsModule.highestVote(this.votes);
            this.average = myStatsModule.averageVote(this.votes);
            this.median = myStatsModule.medianVote(this.votes);            

            this.show_votes = true;            
        }
    }
}
</script>