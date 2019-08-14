import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class BettingPosition extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(props) {
        const { open, size } = this.state

        return (
            <a onClick={this.show('tiny')} href="#">
                <img className={`ui image ${this.props.imageSize}`} src={this.props.imageSource} alt={ `position ${this.props.position}` }/>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative>No</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions>
                </Modal>
            </a>
        )
    }
}

export default BettingPosition;