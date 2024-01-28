import Button from './Button';

export default function SplitBill() {
	return (
		<form className="form-split-bill">
			<h2>Split a bill with X</h2>

			<label>💰 Bill amount</label>
			<input type="text" />

			<label>🧍‍♀️ Your expense</label>
			<input type="number" />

			<label>🧍‍♀️ X's expense</label>
			<input type="number" disabled />

			<label>🤑 Who is paying the bill?</label>
			<select>
				<option value="user">You</option>
				<option value="friend">X</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
}
