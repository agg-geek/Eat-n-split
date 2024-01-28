import Friend from './Friend';
export default function FriendsList({ friends, onSelectFriend }) {
	return (
		<ul>
			{friends.map(friend => (
				<Friend friend={friend} key={friend.id} onSelectFriend={onSelectFriend} />
			))}
		</ul>
	);
}
