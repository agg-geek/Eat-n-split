import { useState } from 'react';
import Button from './Button';

export default function AddFriend({ onAddFriend }) {
	// Controlled elements
	const [name, setName] = useState('');
	const [image, setImage] = useState('https://i.pravatar.cc/48');

	function handleSubmit(evt) {
		evt.preventDefault();

		if (!name || !image) return;

		// i.pravatar.cc/48 returns a random avatar image of size 48px
		// since a random image is returned always, we can concatenate
		// a random string to it, which will then return the same image every time
		const id = crypto.randomUUID();
		const newFriend = { id, name, image: `${image}?u=${id}`, balance: 0 };
		onAddFriend(newFriend);

		setName('');
		setImage('https://i.pravatar.cc/48');
	}

	return (
		<form className="form-add-friend" onSubmit={handleSubmit}>
			<label>👫 Friend name</label>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />

			<label>🌄 Image URL</label>
			<input type="text" value={image} onChange={e => setImage(e.target.value)} />

			<Button>Add friend</Button>
		</form>
	);
}
