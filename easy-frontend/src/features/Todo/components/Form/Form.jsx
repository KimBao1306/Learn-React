import {yupResolver} from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

Form.propTypes = {
	handleSubmitForm: PropTypes.func,
};
Form.defaultProps = {
	handleSubmitForm: null,
};
function Form(props) {
	const schema = yup.object().shape({
		title: yup.string().required('Please enter title').min(3),
	});

	const form = useForm({
		defaultValues: {
			title: '',
		},
		resolver: yupResolver(schema),
	});

	const {handleSubmitForm} = props;

	const checkHandleSubmitForm = (value) => {
		if (!handleSubmitForm) {
			return;
		}
		handleSubmitForm(value);
		form.reset();
	};
	return (
		<div>
			<form onSubmit={form.handleSubmit(checkHandleSubmitForm)}>
				<InputField form={form} name="title" label="Todo"  />
			</form>
		</div>
	);
}

export default Form;
