import React, {Component} from 'react'
import {storage} from '../firebase'
import {Row} from 'reactstrap'

class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleChange = (e) => {
    if(e.target.files[0]) {
      const image = e.target.files[0]
      this.setState(() => ({image}))
    }
  }

  handleUpload = () => {
    const {image} = this.state
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on('state_changed',
      (snapshot) => {
        //progress function
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        this.setState({progress})
      },
      (error) => {
        // error function
      console.log(error)
      },
      () => {
      // complete function
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        console.log(url)
        this.setState({url})
      })
    })
  }
  render() {
    // const style = {
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // }
    return(
      <div>
        <h4>Upload Documents</h4><h6>Click upload after each file is chosen.</h6>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        {/*
         <p>Upload progress:</p>
         <progress value={this.state.progress} max="100"/>
         <br/>
         <img src={this.state.url || 'http://via.placeholder.com/400X300'} alt="Uploaded images" height="300" />*/}
      </div>
    )
  }
}

export default ImageUpload
