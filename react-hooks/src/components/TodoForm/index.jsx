import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
	handleAddItem: PropTypes.func,
};

TodoForm.defaultProps = {
	handleAddItem: null,
};

function TodoForm(props) {
	const {handleAddItem} = props;

	const [valueForm, setValueForm] = useState('');

	function onChangeInput(e) {
		setValueForm(e.target.value);
	}

	function checkSubmitForm(e) {
		e.preventDefault();
		if (!handleAddItem) return;
		if (!valueForm) return;
		//tạo 1 obj để chứa dữ liệu trả về component cha. Làm như vậy sẽ dễ mở rộng thêm các field trong tương lai
		const valuesForm = {
			title: valueForm,
		};
		handleAddItem(valuesForm);
		setValueForm('');
	}

	return (
		<form onSubmit={checkSubmitForm}>
			<input
				type="text"
				name="value"
				id="value"
				onChange={onChangeInput}
				value={valueForm}
			/>
		</form>
	);
}

export default TodoForm;
