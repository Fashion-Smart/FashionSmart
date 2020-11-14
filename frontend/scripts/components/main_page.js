import React from "react"
import FilePicker from "./file_picker"
import { generateBase64FromImage } from '../utils/image_parser';

class ShoppingPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            image: null
        }
    }

    ImageChangeHandler = (files) => {
        if (files) {
          generateBase64FromImage(files[0])
            .then(b64 => {
              this.setState({ image: b64 });
            })
            .catch(e => {
              this.setState({ image: null });
            });
        } else {
            this.setState({ image: null });
        }
    }

    render(){
        return (
            <FilePicker onChange={this.ImageChangeHandler.bind(this)}></FilePicker>
        );
    }
}

export default ShoppingPage;