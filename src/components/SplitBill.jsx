import { useState } from 'react';
import Button from './Button';

export default function SplitBill({ friend, onSplitBill }) {
	const [amount, setAmount] = useState('');
	const [userExpense, setUserExpense] = useState('');
	const friendExpense = amount ? amount - userExpense : '';
	const [paidBy, setPaidBy] = useState('user');

	function handleSubmit(evt) {
		evt.preventDefault();

		if (!amount || !userExpense) return;

		onSplitBill(paidBy === 'user' ? friendExpense : -userExpense);
	}

	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {friend.name}</h2>

			<label>💰 Bill amount</label>
			<input
				type="number"
				value={amount}
				onChange={e => setAmount(Number(e.target.value))}
			/>

			<label>🧍‍♀️ Your expense</label>
			<input
				type="number"
				value={userExpense}
				onChange={e =>
					setUserExpense(
						Number(e.target.value) > amount
							? userExpense
							: Number(e.target.value)
					)
				}
			/>

			<label>🧍‍♀️ {friend.name}'s expense</label>
			<input type="number" value={friendExpense} disabled />

			<label>🤑 Who is paying the bill?</label>
			<select value={paidBy} onChange={e => setPaidBy(e.target.value)}>
				<option value="user">You</option>
				<option value="friend">{friend.name}</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
}
