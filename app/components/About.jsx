var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to my React weather app. This was built while completing an online React class on Udemy. It is called the
        Complete React Developer Course. The instructor is Andrew Mead and
      the course is excellent. I highly recommend it. The app is fairly simple but it does include all of the foundations
      of React. These include Components, ReactDom, React Routing, JSX, State and Props.</p>
      <p>While the course is focused on teaching you React, it also covers all of the tooling neccessary to build, pack, process and deploy your app
      to the web.</p>
    <section>
      <h3>Technologies and Tools:</h3>
      <ol>
        <li>React: For component based rendering.</li>
        <li>Express/Node: Server and installing modules using NPM.</li>
        <li>Webpack: For packing, proccessing and bundling your files.</li>
        <li>Babel: For converting to compatible javascript.</li>
        <li>Axios: Used to fetch the weather using the Open Weather API.</li>
        <li>Git: For version control.</li>
        <li>Foundation: For responsive grid and css styling.</li>
        <li>Heroku: For deploying your new React web app online!</li>
      </ol>
    </section>
    </div>
  )
};

module.exports = About;
