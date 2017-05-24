import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are sick', color: 'peru'}),
        MyTitleFactory({title: 'React is starting to make sense', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'I need a job', color: 'tomato'}),
        MyTitleFactory({title: 'hopefully I can use this skill', color: 'darkvioletred'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
