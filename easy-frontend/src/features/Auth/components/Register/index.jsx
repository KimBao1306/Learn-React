import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
	const submitForm = (value) => {
		console.log('Form Register Submit', value);
	};
	return (
		<div>
			<RegisterForm handleSubmitForm={submitForm} />
		</div>
	);
}

export default Register;
