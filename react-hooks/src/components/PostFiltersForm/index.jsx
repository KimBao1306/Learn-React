import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {useRef} from 'react';

PostFiltersForm.propTypes = {
	submitForm: PropTypes.func,
};

PostFiltersForm.defaultProps = {
	submitForm: null,
};

function PostFiltersForm(props) {
	const [searchTerm, setSearchTerm] = useState('');

	const {submitForm} = props;
	const sto = useRef(null);

	function checkSubmitForm(e) {
		if (!submitForm) return;

		const v = e.target.value;
		setSearchTerm(v);

		if (sto.current) {
			clearTimeout(sto.current);
		}
		sto.current = setTimeout(() => {
			const values = {
				searchTerm: v,
			};
			submitForm(values);
		}, 300);
	}

	return (
		<form>
			<input type="text" value={searchTerm} onChange={checkSubmitForm} />
		</form>
	);
}

export default PostFiltersForm;
