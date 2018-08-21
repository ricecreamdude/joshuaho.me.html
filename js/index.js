Vue.component('vue-header', {
  template: `
      <nav class="navbar navbar-expand-lg navbar-light  " v-bind:style="headerStyle">
        <a class="navbar-brand" href="#">joshuaho.me</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Say Hello</a>
            <a class="nav-item nav-link" href="https://server223.web-hosting.com:2083/">Login</a>
          </div>
        </div>
      </nav>
  `,
  data: () => {
    return {
      headerStyle: {
        backgroundColor: '#24478f'
      }
    }
  }
})

Vue.component('vue-intro', {
  template: `
    <div id="intro-container">
      <span v-bind:style='styleHeroText'>Hi, I'm Josh. I'm a full-stack web developer.</span>
    </div>
  `,
  data: () => {
    return {
      styleHeroText: {
        fontSize: '4.5em',
        fontWeight: 'bold',
        color: 'black'
      }
    }
  }
});

Vue.component('vue-hello', {
  template: `
    <div class="container-fluid hello" v-bind:style="helloStyle">
        <h1>Hi I'm Josh. Glad to meet you.</h1>
        <span>Three years ago I completed the CodeFellows JavaScript
        bootcamp for Front End development.  Since, I've worked a variety of jobs
        in the field: I moonlighted as a freelance developer and spent two years as
        a digital marketing consultant. In all my jobs, my love for learning new
        technologies and my education as a business student has shone through.
        I love collaborating with talented people to create digital solutions for
        e-commerce clients. I am naturally curious and creative,
        people oriented, and always looking to improve my skills.</span>
    </div>
  `,
  data: () => {
    return {
      helloStyle: {
        textAlign: 'center',
        padding: '150px 15%',
        backgroundColor: 'white'
      }
    }
  }
})
Vue.component('vue-portfolio', {
  template: `
    <div class="container" v-bind:style="portfolioStyle">
      <h1>My Recent Work</h1>
    </div>
  `,
  data: ()=>{
    return{
      portfolioStyle:{
          textAlign: 'center',
          padding:  '10% 0px'
      }
    }
  }
});

Vue.component('vue-portfolio-card', {
  props: ['todo'],
  template: `
    <div class="col-sm" v-bind:style="cardStyle" href="{{todo.link}}">
      <h3>{{todo.title}}</h3>
      <p>{{todo.description}}</p>
    </div>
  `,
  data: ()=>{
    return {
      cardStyle: {
        float: "left",
        width: "32%",
        height: "150px",
        textAlign: "center",
        backgroundColor: "white",
        padding: "20px 0px",
        margin: "5px 5px"
      }
    }
  }
})
Vue.component('vue-footer', {
  template: `
    <footer class="container-fluid footer" >
      <!-- TODO: Add social: LinkedIn, Github -->
      <span>Let's chat.  Email me at ho.joshua4@gmail.com, or use the <a href="#/contact">contact page</a></span>
    </footer>
  `
});

///////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////
