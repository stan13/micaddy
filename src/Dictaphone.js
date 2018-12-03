import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';
import Button from "react-bootstrap/es/Button";
import Glyphicon from "react-bootstrap/es/Glyphicon";

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool,
    sendAudio: PropTypes.func
};

class Dictaphone extends Component {

    sendAudioAndReset = async () => {
        await this.props.sendAudio(this.props.transcript);
        this.props.resetTranscript();
    };

    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props;

        if (!browserSupportsSpeechRecognition) {
            return null
        }

        return (
            <div>
                <Button bsStyle="primary" onClick={this.sendAudioAndReset}>
                    <Glyphicon glyph="arrow-right" />
                </Button>
                <div>
                    <span>{transcript}</span>
                </div>
            </div>
        )
    }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);