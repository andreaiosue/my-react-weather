var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Bemopan'>Bemopan, Belize</Link>
          </li>
          <li>
            <Link to={`/?location=${encodeURIComponent('San José')}`}>San José, Costa Rica</Link>
          </li>
          <li>
            <Link to={`/?location=${encodeURIComponent('San Salvador')}`}>San Salvador, El Salvador</Link>
          </li>
          <li>
            <Link to={`/?location=${encodeURIComponent('Guatemala City')}`}>Guatemala City, Guatemala</Link>
          </li>
          <li>
            <Link to='/?location=Tegucigalpa'>Tegucigalpa, Honduras</Link>
          </li>
          <li>
            <Link to='/?location=Managua'>Managua, Nicaragua</Link>
          </li>
          <li>
            <Link to={`/?location=${encodeURIComponent('Panama City')}`}>Panama City, Panama</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
