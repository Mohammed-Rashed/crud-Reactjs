import React ,{Component} from 'react';

class Index extends Component{

    state={
        isEdit:false
    }
    editCourse=()=>{
        let isEdit=this.state.isEdit
        this.setState({
            isEdit:!isEdit
        })
    }
    updateCourse=(e)=>{
        e.preventDefault()
        this.props.updateCourse(this.props.index,this.input.value)
        this.editCourse()
        /* console.log(e.target.value)
         this.setState({
             current:e.target.value
         })*/
    }

    renderCourses=()=>{
        return(
            <li className="p-2 list-group-item">
                <span className="f-20">{this.props.details.name}</span>
                <button className="btn btn-info ml-2 p-1" onClick={()=>this.editCourse()}> Edit</button>
                <button className="btn btn-danger ml-2 p-1" onClick={()=>this.props.deleteCourse(this.props.index)}> Delete</button>
            </li>
        )
    }
    updateForm=()=>{
        return(
            <li className="p-0 list-group-item"><form onSubmit={this.updateCourse} >
                <div className="form-row col-6 p-2 offset-4">
                    <div className="form-group m-0 col-md-6">
                        <input type="text" placeholder="Course name" className="form-control" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name} id="name"/>
                    </div>

                    <div className="form-group m-0 col-md-2">
                        <input type="submit" className="btn btn-info p-1" value="update"/>
                    </div>
                </div>
            </form></li>
        )
    }
    render(){
            let isEdit=this.state.isEdit
        return(
            <React.Fragment>

                {isEdit==false? this.renderCourses() : this.updateForm()}
            </React.Fragment>
        )
    }
}


export default Index;