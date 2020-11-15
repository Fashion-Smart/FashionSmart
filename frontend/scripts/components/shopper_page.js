import React from "react"
import ImageUploader from 'react-images-upload';
import {generateBase64FromImage} from "../utils/image_parser"

class ShopperPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            image: null
        }
    }

    fetchData = (formData) =>{
        fetch("/search", {
            method: "POST",
            body: formData
        })
        .then(resData=>{
          console.log(resData);
          });
    }

    ImageChangeHandler = (files) => {
        if (files.length>0) {
            this.setState({ image: files[0] });
            
            const formData = new FormData();
            formData.append("image", files[0]);

            fetch("/search", {
                method: "POST",
                body: formData
            })
            .then(resData=>{
              console.log(resData);
              })
            .catch(e => {
              console.log(e.message);
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
                withPreview={true}
                withIcon={true}
                buttonText='Choose images'
                onChange={this.ImageChangeHandler.bind(this)}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
                singleImage={true}
            />
        </>
        );
    }
}

export default ShopperPage;