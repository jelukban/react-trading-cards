'use strict';

function Homepage() {
  return (
  <div>
    <div>
    <img src="/static/img/balloonicorn.jpg"></img>
    <a href="/cards">Head to the cards page</a>
    </div>
    <div>
    <a href="/about">Head the about me section.</a>
    </div>
  </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
