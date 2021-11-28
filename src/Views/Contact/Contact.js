import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './Contact.css';

function Contact() {
	return (
		<div className='formulario' style={{ padding: 40 }}>
			<h1>Contact</h1>
	<Form>
    <Form.Field>
      <label>Nombre</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label >Apellido</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Acepto términos y condiciones' />
    </Form.Field>
    <Button type='submit'>Enviar</Button>
  </Form>
		</div>
	);
}

export default Contact;