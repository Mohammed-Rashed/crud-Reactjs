import React ,{Component} from 'react';
import './App.css';
import Index from './components/index'
import Add from './components/add'

class App extends Component{
    state={
        courses:[
            {name:'Html'},
            {name:'CSS'},
            {name:'Javascript'},
        ],
        current:''
    }

    deleteCourse=(index)=>{
        let courses=this.state.courses
        courses.splice(index,1)
        this.setState({
            courses
        })
        console.log('deleted')

    }

    addecourse=(e)=>{
        e.preventDefault()
        console.log("course added")
        let current=this.state.current
        let courses=this.state.courses
        courses.push({name:current})
        this.setState({
            courses,
            current:''
        })
    }

    updateCourse=(index,val)=>{
        let courses=this.state.courses
        let course =courses[index]
        course['name']=val
        this.setState({
            courses
        })
    }
    updateCurrent=(e)=>{
        let target=e.target.value
        this.setState({
            current:target
        })
    }


    render(){
    const {courses}=this.state
        const Allcourses=courses.map((course,index)=>{
            return <Index index={index} deleteCourse={this.deleteCourse}  updateCourse={this.updateCourse}   details={course} key={index}/>
         })
    return(
        <div className="App">
            <div  className="container">
                <h1>CRUD App ReactJs</h1>
                <Add current={this.state.current}  addecourse={this.addecourse}  updateCurrent={this.updateCurrent}  />
              <ul className="list-unstyled list-group">
                  {Allcourses}
              </ul>

            </div>

        </div>
    )
  }
}


export default App;
