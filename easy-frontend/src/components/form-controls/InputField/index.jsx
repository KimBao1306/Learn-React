import {ErrorMessage} from '@hookform/error-message';
import {TextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {FormProvider} from 'react-hook-form';
import {Controller, useFormState} from 'react-hook-form';

InputField.propTypes = {
	// OBJ FORM TO REACT-HOOK-FORM GIVING
	form: PropTypes.object.isRequired,
	// INPUT VALUE
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
};
InputField.defaultProps = {
	label: '',
	type: 'text',
	disabled: false,
};

function InputField(props) {
	const {form, name, type, label, disabled} = props;
	const {errors, touchedFields} = form.formState;
	// formState.errors: object
	// formState.touchedFields: object
	const hasError = errors[name] && touchedFields[name];
	return (
		<>
			<Controller
				// implement name form control
				name={name}
				control={form.control}
				render={({field}) => (
					<TextField
						{...field}
						error={hasError}
						helperText={errors[name]?.message}
						fullWidth
						type={type}
						variant="outlined"
						margin="normal"
						label={label}
						disabled={disabled}
					/>
				)}
			/>
		</>
	);
}

export default InputField;
