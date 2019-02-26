import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import classNames from 'classnames';

export class TodoItem extends Component {
	render() {
		const {id, title, completed} = this.props.todo;

		let completion = classNames({
			completed: completed,
			incomplete: !completed
		});

		return (
			<div className="todo-item">
				<span class="badge">Todo:</span>
				<p className={completion}>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>
					{title}
				</p>
				<button className="del" onClick={this.props.delTodo.bind(this, id)}>
					X
				</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};

export default TodoItem;
