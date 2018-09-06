<template>
  <nav class="navbar navbar-light navbar-expand-sm navbar-light navbar-jw navbar-fixed-top">

    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> Poker plan
    </a>
    
    <div class="nav navbar-nav" id="navbarNav">
        <div class="navbar-nav">
          <router-link to="/start-session" class="nav-item nav-link active" active-class="active" exact>
            Start session
          </router-link>
          <router-link to="/join-session" class="nav-item nav-link active" active-class="active" exact>
            Join session
          </router-link>
        </div>
    </div>
  </nav>
</template>

<script src="../assets/js/bootstrap.js"></script>
<script>
export default {
  name: 'TopNavBar',
  methods: {
    activeClass: function (...names) {
      for (let name of names) {
        if (name == this.$route.name) {
          return 'link-active'
        }
      }
    }   
  }  
}
</script>

