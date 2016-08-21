import React from 'react';

export default class Browser extends React.Component {

    triggerFileUpload = (event) => {
        event.preventDefault();
        this.fileInput.click();
    }

    render() {
        return (
            <form>
                <select>
                    <option selected="selected" disabled="disabled">Select a predifined image</option>
                </select>
                <span> or </span>
                <input type="file" ref={input => { this.fileInput = input; }} style={{ display: 'none' }} />
                <button onClick={this.triggerFileUpload}>Browse...</button>
            </form>
        );
    }
}
