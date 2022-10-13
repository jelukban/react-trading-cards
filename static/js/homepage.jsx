'use strict';

function Homepage() {
  return (
  <div>
    <img src="/static/img/balloonicorn.jpg"></img>
    <a href="/cards">Head to the cards page</a>
  </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
