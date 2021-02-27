import React from 'react'


export default class PostForm extends React.Component {
constructor(props){
super(props)

this.state={
    title: ''
}


}

 handleSubmit = event => {
    event.preventDefault()
   const {title}=this.state
   const newPost = {
       title, id: Date.now().toString()
   }
   console.log(newPost)
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