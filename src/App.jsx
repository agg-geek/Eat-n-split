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
	const [friends, setFriends] = useState(data);
	const [displayAddFriend, setDisplayAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleDisplayAddFriend() {
		setDisplayAddFriend(display => !display);
	}

	function handleAddFriend(newFriend) {
		setFriends(friends => [...friends, newFriend]);
		setDisplayAddFriend(false);
	}

	function handleSelectedFriend(friend) {
		setSelectedFriend(currFriend => (friend.id === currFriend?.id ? null : friend));
		setDisplayAddFriend(false);
	}

	function handleSplitBill(value) {
		setFriends(friends =>
			friends.map(friend =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);

		setSelectedFriend(null);
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList
					friends={friends}
					onSelectFriend={handleSelectedFriend}
					selectedFriend={selectedFriend}
				/>
				{displayAddFriend && <AddFriend onAddFriend={handleAddFriend} />}

				<Button onClick={handleDisplayAddFriend}>
					{displayAddFriend ? 'Close' : 'Add friend'}
				</Button>
			</div>
			{selectedFriend && (
				<SplitBill
					key={selectedFriend.id}
					friend={selectedFriend}
					onSplitBill={handleSplitBill}
				/>
			)}
		</div>
	);
}
