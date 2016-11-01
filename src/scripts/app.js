const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')

console.log(React)


let HomeView = React.createClass({
    render: function(){
      console.log(this.props.congressMen)
            let theManArry = this.props.congressMen.map(function(theMan, i){
                return <CongressView congObj={theMan} key={i}/>
            })
                    return (
                      <div>

                          <ul>
                            {theManArry}
                          </ul>
                      </div>

      )

  }
})



let CongressView = React.createClass({
      render: function(){

                  return (

                        <div className="col-sm-4 col-md-4">
                           <div className="thumbnail thumb-of-theMan">
                           <h2> {this.props.congObj.first_name} {this.props.congObj.last_name }</h2>
                             <div className="caption">
                               <h3> {this.props.congObj.title}--{this.props.congObj.party}-{this.props.congObj.state_name} </h3>
                               <ul>
                               <li>e-mail: {this.props.congObj.oc_email}</li>
                               <li>website: {this.props.congObj.website}</li>
                               <li>facebook: {this.props.congObj.facebook_id}</li>
                               <li>twitter: {this.props.congObj.twitter_id}</li>
                               </ul>
                             <h5>TermEnd {this.props.congObj.term_end}</h5>
                             </div>
                           </div>
                         </div>
                       )
      }
})


$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=4efdfcf3ad7e49e5be2528edd4889271').then(function(putLegislatesOnPage){

ReactDOM.render(<HomeView congressMen={putLegislatesOnPage.results}/>, document.querySelector('#app-container'))
})
