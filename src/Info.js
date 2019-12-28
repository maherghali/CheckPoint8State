import React from 'react';

class  Info extends React.Component{




    render (){
        return(
            <>
        <h1>{this.props.information.title}</h1>
        <img src={this.props.information.photo} />
        <p>{this.props.information.description}</p>
        </>
        )
    }
}

export default Info;