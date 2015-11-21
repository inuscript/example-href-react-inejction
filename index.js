//http://192.168.44.182:9966/?foo="><script>alert(1);</script>
const ReactDom = require("react-dom")
const React = require("react")
const { Component } = require("react")
const qs = require("querystring")

class TestCmp extends Component{
  get link(){
    const cs = qs.parse(location.search.substring(1))
    const str = qs.stringify({
      a: "b",
      cs: cs["foo"]
    })
    return "/page><script>alert('xss')</script>"
    return "/page?" + str
  }
  render(){
    return <div>
      <a href={this.link}>foo</a>
      <div>{this.link}</div>
    </div>
  }
}

ReactDom.render(<TestCmp />, document.querySelector("#container"))
