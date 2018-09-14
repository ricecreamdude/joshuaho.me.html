Vue.component('vue-header', {
  template: `
      <nav class="navbar navbar-expand-lg navbar-light" v-bind:style="headerStyle">
        <a class="navbar-brand" href="#">joshuaho.me</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">

          </div>
        </div>
        <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contactModal">
            Say Hello
          </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="contactModalLabel">Say Hello</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="">
                  Feel free to contact me for employment opportunities, job inquries, collaborations, or
                  just to say hello.
                </div>
                <br />
                <form class="" action="index.html" method="post">
                  <!-- TO DO -->
                  <!-- Add Captcha -->
                  <!-- Link Modal to my email -->
                  <div class="form-group">
                    <label for="inputName">Name</label>
                    <input class="form-control" type="text" id="inputName">
                  </div>
                  <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input class="form-control" type="text" id="inputEmail">
                  </div>
                  <div class="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" rows="4" id="inputMessage"></textarea>
                  </div>
                  <div class="form-group">
                    <small>Humans only please</small>
                  </div>
                </form>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>

      </nav>
  `,
  data: () => {
    return {
      headerStyle: {
        // backgroundColor: '#f5f5f5'
      }
    }
  }
})

Vue.component('vue-intro', {
  template: `
    <div id="intro-container">
      <span v-bind:style='styleHeroText'>Web Developer, Nerd, & Consultant</span>
    </div>
  `,
  data: () => {
    return {
      styleHeroText: {
        fontSize: '3em',
        fontWeight: 'bold',
        color: 'black'
      }
    }
  }
});

Vue.component('vue-about', {
  template: `
  <div>
  <div class="container-fluid" id="hello-container" v-bind:style="helloStyle">
      <h1>Thanks for stopping by</h1>
      <br/>
      <span>Three years ago I completed the CodeFellows JavaScript
      bootcamp for Front End development.  Since, I've worked a variety of jobs
      in the field: I moonlighted as a freelance developer and spent two years as
      a digital marketing consultant. In all my jobs, my love for learning new
      technologies and my education as a business student has shone through.
      I love collaborating with talented people to create digital solutions for
      e-commerce clients. I am naturally curious and creative,
      people oriented, and always looking to improve my skills.</span>
  </div>
  <div class="container" v-bind:style="aboutStyle">
    <div class="row" style="margin-top:-50px;">
      <div class="col-sm">
        <div class="abt-title">Web Developer</div>
        <div class="abt-text">I build websites from scratch and love watching
        web pages come to life  </div>
        <div class="abt-skillTitle">Languages I Speak:</div>
        <div>JavaScript, CSS, HTML, SQL</div>
        <div class="abt-skillTitle">Dev Tools:</div>
        <ul class="abt-skillList">
          <li>Atom</li>
          <li>GitHub</li>
          <li>Bootstrap</li>
          <li>Terminal</li>
          <li>Git Bash</li>
        </ul>
      </div>
      <div class="col-sm">
        <div class="abt-title">Consultant</div>
        <div class="abt-text">I can work closely with clients and provide advice
        based on business needs</div>
        <div class="abt-skillTitle">My Experience:</div>
        <ul class="abt-skillList">
          <li> </li>
          <li> Here's Another Skill</li>
          <li> Skill Three</li>
          <li> $k1LL F0UR</li>
          <li> Skill 5</li>
          <li> Here's Another Skill</li>
          <li> Skill Six</li>
          <li> $k1LL S373N</li>
        </ul>
      </div>
      <div class="col-sm">
        <div class="abt-title">Digital Marketing Techie</div>
        <div class="abt-text">I install ecommerce tools to help businesses
        grow their online pressence</div>
        <div class="abt-skillTitle">My Experience:</div>
        <ul class="abt-skillList">
          <li> Google Tag Manager</li>
          <li> Facebook Marketing</li>
          <li> Google Merchant Product Feeds</li>
          <li> Google Analytics</li>
          <li> AdRoll</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `,
  data: () => {
    return {
      helloStyle: {
        textAlign: 'center',
        padding: '150px 15% 350px 15%',
        backgroundColor: '#5e9af9',
        color: 'white'
      },
      aboutStyle: {
        textAlign: 'center',
        padding: '130px 0px',
        border: '0.5px solid #5e9af9',
        borderRadius: '25px',
        marginTop: '-200px',
        backgroundColor: 'white'

      }
    }
  }
})
Vue.component('vue-portfolio', {
  template: `
    <div class="container" v-bind:style="portfolioStyle">
      <h1>Projects I've Worked On</h1>
      <p>Here are some of the websites I helped create</p>
    </div>
  `,
  data: ()=>{
    return{
      portfolioStyle:{
          textAlign: 'center',
          padding:  '5% 0px'
      }
    }
  }
});

Vue.component('vue-portfolio-card', {
  props: ['project'],
  template: `
    <div class="col-sm" v-bind:style="cardStyle" href="{{project.link}}">

      <h3>{{project.title}}</h3>
      <p>{{project.description}}</p>
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
  <footer class="container-fluid footer row" v-bind:style="footerStyle" >
    <!-- TODO: Add social: LinkedIn, Github -->
    <div class="col-10">
      <span>Let's chat.  Email me at ho.joshua4@gmail.com, or use the <a href="#/contact">contact page</a></span>
    </div>
    <div class="col-2">
      <a href="https://github.com/ricecreamdude" id="icon-github" class="icon-social" target="_blank">
        <img src="./images/GitHub-Mark-32px.png" alt="">
      </a>
      <a href="https://www.linkedin.com/in/joshua-ho-80b6a251/" id="icon-linkedin" class="icon-social" target="_blank">
        <img src="./images/In-Black-34px-R.png" alt="">
      </a>
    </div>
  </footer>
  `,
  data: () => {
    return{
      footerStyle:{
        width: "100%",
        margin: "0px"
      }
    }
  }
});

///////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////
