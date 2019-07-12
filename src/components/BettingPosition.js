import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class BettingPosition extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(props) {
        const { open, size } = this.state

        return (
            <div>
                <img className="ui image tiny" src={this.props.imageSource} onClick={this.show('tiny')}/>

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
            </div>
        )
    }
}

export default BettingPosition;