import React ,{Component} from 'react';

class Add extends Component{

    render(){
        return(
            <div className="">
                <form onSubmit={this.props.addecourse} >
                    <div className="form-row col-6 offset-4">
                        <div className="form-group col-md-6">
                            <input type="text" placeholder="Course name" className="form-control"     value={this.props.current}  onChange={this.props.updateCurrent} id="name"/>
                        </div>

                        <div className="form-group col-md-2">
                            <input type="submit" className="form-control" value="Add"/>
                        </div>
                    </div>
                </form>
            </div>


        )
    }
}


export default Add;