// Obtain the root
  const rootElement = document.getElementById('root')
// Create a ES6 class component
  class ReactHeader extends React.Component {
    render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">joshuaho.me</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav"></div>
          </div>
        </nav>
      )
    }
  }

  class ReactSlider extends React.Component {
    render() {
      return (
        <div id="intro-container">
          <h1> Josh Ho </h1>
          <span>Web Developer & Consultant</span>
        </div>
      )
    }
  }

  class ReactAbout extends React.Component {
    render() {
      return (
        <div class="container-fluid" id="about-container">
          <h2>Thanks for stopping by</h2>
          <br/>
          <span>
            I am a Seattle native with a background in business that loves
            creating websites. I have been in the industry for over three years.
            I attended a JavaScript coding bootcamp, worked for two years in a consulting firm as a general technologist,
            and now moonlight as a web developer.
            <br /> <br />
            I regularly work with talented people to create digital solutions for
            e-commerce clients. I am naturally curious and creative,
            people oriented, and always looking to improve my skills.
          </span>
        </div>
      )
    }
  }

  class ReactDetails extends React.Component {
    render() {
      return (
        <div class="container details-container">
          <div class="row">
            <div class="col-sm details details-collumn details-top">
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
                <li>Git Bash</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div class="col-sm details details-collumn details-middle">
              <div class="abt-title">Consultant</div>
              <div class="abt-text">I can work closely with clients and provide advice
              based on business needs</div>
              <div class="abt-skillTitle">My Experience:</div>
              <ul class="abt-skillList">
                <li> </li>
                <li> Data Analysis</li>
                <li> Microsoft Office</li>
                <li> Client Interaction</li>
                <li> Requirements Analysis</li>
                <li> Specification Documentation</li>
              </ul>
            </div>
            <div class="col-sm details details-collumn details-bottom">
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
      )
    }
  }

  class ReactProjects extends React.Component {
    render(){
      return(
        <div class="portoflio-title-container">
          <h2>Projects</h2>
          <p>Here are some of the websites I helped create</p>
        </div>
      )
    }
  }

  class ReactFooter extends React.Component {
    render() {
      return (
        <footer class="footer row cust-footer">
          <div class="col-12">
            <a href="https://github.com/ricecreamdude" id="icon-github" class="icon-social" target="_blank">
              <img src="./images/GitHub-Mark-32px.png"/>
            </a>
            <a href="https://www.linkedin.com/in/joshua-ho-80b6a251/" id="icon-linkedin" class="icon-social" target="_blank">
              <img src="./images/In-Black-34px-R.png"/>
            </a>
          </div>
        </footer>
      )
    }
  }

  function portfolioCard(project){
    return(
      <a href={project.link} target="_blank">
        <div class="col-sm portfolio-card" id={project.className}></div>
      </a>
    )
  }

// Create a function to wrap up your component
  function App(){
    return(
      <div>
      {/*{<ReactHeader />  */}
        <ReactSlider />
        <ReactAbout />
        <ReactDetails />
        <ReactProjects />
        <div class="portfolio-container">

          {portfolioCard(portfolioItems[0])}
          {portfolioCard(portfolioItems[1])}
          {portfolioCard(portfolioItems[2])}
        </div>
        <ReactFooter />
      </div>
    )
  }
// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
  <App />,
  rootElement
)
