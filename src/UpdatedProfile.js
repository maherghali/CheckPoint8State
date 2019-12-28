import React from 'react';
import Info from './Info';
import imgSara from'./ImageSarra.jpg';
import imgDaniel from'./ImageDaniel.jpg';

class UpdatedProfile extends React.Component {

    state = {
        infor: {
            title: '',
            photo: '',
            description: ''
        }
    }



    render() {
        const Profiles = {
            sarra: { title: 'Sarra', photo:imgSara , description: ' yes I am sarra ' },
            Daniel: { title: 'Daniel', photo: imgDaniel, description: 'A Belgian research team found that your Facebook profile photo may affect how desirable you are to employers. Profiles with "desirable" pictures were significantly more likely to get a positive response. ' }

        }
        return (
            <>
            <button 
                onClick={() => {
                    this.setState({ infor: Profiles.sarra });
                    
                }}>
                Sarra
            </button>
            <button 
                onClick={() => {
                    this.setState({  infor: Profiles.Daniel});
                    
                }}>
              Daniel
            </button>

            <Info information ={this.state.infor}/>
            </>
        )
    }
}

export default UpdatedProfile;