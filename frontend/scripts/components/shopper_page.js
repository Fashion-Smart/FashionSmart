import React from "react"
import ImageUploader from 'react-images-upload';

class ShopperPage extends React.Component{
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
        <>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.ImageChangeHandler.bind(this)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        </>
        );
    }
}

export default ShopperPage;