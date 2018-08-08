Vue.component('vue-header', {
  template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
  `
});

Vue.component('vue-intro', {
  template: `
    <div class="container intro">
      <h2>Front-end Developer, Digital Marketing Consultant & Small-Business Lover</h2>
      <h5>I love working with small buisness owners to help them accomplish their goals</h5>
    </div>
  `
});
Vue.component('vue-hello', {
  template: `
    <div class="container hello">
        <h3>Hi I'm Josh. Glad to meet you.</h3>
        <span>Three years ago I completed the CodeFellows JavaScript
        bootcamp for Front End development.  Since, I've worked a variety of jobs
        in the field: I moonlighted as a freelance developer and spent two years as
        a digital marketing consultant. In all my jobs, my love for learning new
        technologies and my education as a business student has shone through.
        I love collaborating with talented people to create digital solutions for
        e-commerce clients. I am naturally curious and creative,
        people oriented, and always looking to improve my skills.</span>
    </div>
  `
})
Vue.component('vue-recent', {
  template: `
  <div class="container recent-work ">
    <h2>My Recent Work</h2>

  </div>
  `
});
Vue.component('vue-footer', {
  template: `
    <footer class="container-fluid footer">
      <!-- TODO: Add social: LinkedIn, Github -->
      <span>Let's chat.  Email me at ho.joshua4@gmail.com, or use the <a href="#/contact">contact page</a></span>
    </footer>
  `
});
