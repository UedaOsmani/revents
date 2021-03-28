import React from 'react';
import { Form, Segment , Header, Button } from 'semantic-ui-react';

export default function EventForm ({setFormOpen}) {

    return (
        <Segment clearing>
            <Header content='Create new event'></Header>
        <Form>
            <Form.Field>
                <input type='text' placeholder='Event title' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Category' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Description' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='City' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Venue' />
            </Form.Field>
            <Form.Field>
                <input type='date' placeholder='Date' />
            </Form.Field>
            <Button floated='right' content='Submit' type='submit' positive/>
            <Button onClick={() => setFormOpen(false)} floated='right' content='Cancel' type='submit' />
        </Form>
        </Segment>
    )
}