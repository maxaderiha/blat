import React, {Component} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Modal, Dimensions} from 'react-native';


export default class ImagesViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orientation: false,
        };

        Dimensions.addEventListener('change', this.handelOrientationChange);
    }

    render() {
        const {isOpen, handleOnRequestClose, images = []} = this.props;
        return (
            <Modal
                visible={isOpen}
                transparent={true}
                onRequestClose={handleOnRequestClose}
            >
                <ImageViewer imageUrls={images} key={Date.now()}/>
            </Modal>
        )
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.handelOrientationChange);
    };

    handelOrientationChange = () => {
        this.setState(prevState => ({orientation: !prevState.orientation}));
    };
}