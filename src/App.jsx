import { useState } from 'react';

import './index.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import SplitBill from './components/SplitBill';
import Button from './components/Button';

const data = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

export default function App() {
	const [displayAddFriend, setDisplayAddFriend] = useState(false);

	function handleDisplayAddFriend() {
		setDisplayAddFriend(display => !display);
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList friends={data} />
				{displayAddFriend && <AddFriend />}

				{/* our custom Button component does not have inbuilt onClick event listener */}
				{/* so we instead pass the event listener fn to the <button> elem inside Button */}
				<Button onClick={handleDisplayAddFriend}>
					{displayAddFriend ? 'Close' : 'Add friend'}
				</Button>
			</div>
			<SplitBill />
		</div>
	);
}
