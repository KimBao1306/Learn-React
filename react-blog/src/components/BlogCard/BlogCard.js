import React from 'react';
import PropTypes from 'prop-types';
import {
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';

export default function BlogCard({title, desc, date, img}) {
	return (
		<Col className="mb-4" lg={3} md={6}>
			<Card style={{height: '100%'}}>
				<CardImg top width="100%" src={img} alt="Card image cap" />
				<CardBody className="d-flex flex-column">
					<CardTitle>{title}</CardTitle>
					<CardSubtitle className="text-right">{date}</CardSubtitle>
					<CardText className="flex-grow-1">{desc}</CardText>
					<Button>See more</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

BlogCard.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};
