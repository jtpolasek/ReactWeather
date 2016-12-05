var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p className="text-center">Here are a few example locactions to try out:</p>
      <ol >
        <li>
          <Link to='/?location=Danville'>Danville, CA</Link>
        </li>
        <li>
          <Link to='/?location=Honolulu'>Honolulu, HI</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
