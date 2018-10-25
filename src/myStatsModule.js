let myStatsModule = {

  sortVotes (votes) {
    var sorted = false;
    var stick = {};
    var i;

    while (!sorted) {
        sorted = true;
         for (i=0; i<votes.length-1; i++) {
            if (votes[i].vote != "pass") 
                if (votes[i].vote > votes[i+1].vote) {
                    stick.user = votes[i].user;
                    stick.vote = votes[i].vote;
                    votes[i].user = votes[i+1].user;
                    votes[i].vote = votes[i+1].vote;
                    votes[i+1].user = stick.user;
                    votes[i+1].vote = stick.vote;
                    sorted = false;
                }
        }
    }
  },

  averageVote (votes) {
    var counter = 0;
    var avg_sum = 0.00;
    var i;
    for (i=0; i<votes.length; i++) {
        if (votes[i].vote != "pass") {
            counter++;
            avg_sum += votes[i].vote;
        }
    }
    return Math.round (avg_sum / counter*100, 2)/100;
  },

  medianVote (votes) {
    var half = Math.floor(votes.length/2);
    var median = 0;
    if(votes.length % 2)
        median = votes[half].vote;
    else
        median = Math.round (100*(votes[half-1].vote + votes[half].vote) / 2.0/100, 2);
    return median;
  }, 

  lowestVote (votes) {
    var lowest = 100;
    for (var i=0; i<votes.length-1; i++) {
        if (votes[i].vote != "pass") {
            lowest = votes[i].vote;
            break;
        }
    }
    return lowest;
  },

  highestVote (votes) {
    var highest = 0;
    for (var i=votes.length-1; i>=0; i--) {
        if (votes[i].vote != "pass") {
            highest = votes[i].vote;
            break;
        }
    }
    return highest;
  },

}

export default myStatsModule;