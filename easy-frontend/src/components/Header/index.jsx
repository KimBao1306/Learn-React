import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Register from 'features/Auth/components/Register';
Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: '#fff',
	},
}));
function Header(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="header">
			<AppBar position="static">
				<Toolbar>
					<Link to="/" className={`${classes.title} ${classes.link}`}>
						<Typography variant="h6">Kim Bảo</Typography>
					</Link>
					<NavLink to="/todo" className={classes.link}>
						<Button color="inherit">Todo</Button>
					</NavLink>
					<NavLink to="/counter" className={classes.link}>
						<Button color="inherit">Counter</Button>
					</NavLink>
					<NavLink to="/album" className={classes.link}>
						<Button color="inherit">Albums</Button>
					</NavLink>
					<Button
						color="inherit"
						className={classes.link}
						onClick={handleClickOpen}
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				disableBackdropClick={true}
				disableEscapeKeyDown={true}
			>
				<DialogContent>
					<Register />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Header;
