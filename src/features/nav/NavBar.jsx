import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar ({setFormOpen}){
return (
    <Menu inverted fixed="top">
    <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
            <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event'/>
        </Menu.Item>
        <Menu.Item position='right'>
            <Button positive inverted content='Login'/>
            <Button positive inverted content='Register' style={{marginLeft:'0.5em'}}/>
        </Menu.Item>
    </Container>
    </Menu>

)

}