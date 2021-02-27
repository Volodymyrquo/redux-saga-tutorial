import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from "../redux/actions";


 class PostForm extends React.Component {
constructor(props){
super(props)

this.state={
    title: ''
}


}

 handleSubmit = event => {
    event.preventDefault()
   const {title}=this.state
   if(!title.trim()) {
       return this.props.showAlert('Title of post could not be empty')
   }
   const newPost = {
       title, id: Date.now().toString()
   }
  this.props.createPost(newPost)
   this.setState({title: ''})
}

handleOnChange = event =>{
  
    this.setState(prev =>({...prev,...{
        [event.target.name]: event.target.value
    }}))
}
render () {
    return(
       <form onSubmit={this.handleSubmit}>

{this.props.text && <div className="alert alert-danger" role="alert">
  {this.props.text}
</div>}

<div className="form-group">
    <label htmlFor="title">Post header</label>
    <input 
    type="text"
     className="form-control"
      id="title"
      name='title'
       value={this.state.title}
       onChange={this.handleOnChange}
       />
  </div>
  <div className='mt-2'>
  <button className="btn btn-success " type='submit' >Create</button>
  </div>
       </form>
    )
}

}

const mapStateToProps = (state)=>({
    text: state.app.alert
})

export default connect(mapStateToProps, {createPost,showAlert})(PostForm)