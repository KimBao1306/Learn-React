import {yupResolver} from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
	handleSubmitForm: PropTypes.func,
};
RegisterForm.defaultProps = {
	handleSubmitForm: null,
};
function RegisterForm(props) {
	const schema = yup.object().shape({
		fullName: yup.string().required('Please enter full name').min(3),
		email: yup.string().required('Please enter email').min(3),
		password: yup.string().required('Please enter password').min(3),
		retypePassword: yup
			.string()
			.required('Please enter retype password')
			.min(3),
	});

	const form = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			retypePassword: '',
		},
		resolver: yupResolver(schema),
	});

	const {handleSubmitForm} = props;
	const checkHandleSubmitForm = (value) => {
		if (!handleSubmitForm) {
			return;
		}
		handleSubmitForm(value);
		// form.reset();
	};
	return (
		<div>
			<form onSubmit={form.handleSubmit(checkHandleSubmitForm)}>
				<InputField form={form} name="fullName" label="Full name" />
				<InputField form={form} name="username" label="Username" />
				<InputField
					form={form}
					name="password"
					label="Password"
					type="password"
				/>
				<InputField
					form={form}
					name="retypePassword"
					label="Retype Password"
					type="password"
				/>
			</form>
		</div>
	);
}

export default RegisterForm;
