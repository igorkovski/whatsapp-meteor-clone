angular
	.module('Whatsapp')
	.controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl($scope) {
	$scope.chats = [
		{
			_id: 0,
			name: 'Ethan Gonzales',
			picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
			lastMessage: {
				text: 'Yo, where you at?',
				timestamp: moment().subtract(1, 'hours').toDate()
			}
		},
		{
			_id: 1,
			name: 'Bryan Wallace',
			picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
			lastMessage: {
				text: 'Hey, it\'s me',
				timestamp: moment().bustract(2, 'hours').toDate()
			}
		},
		{
			_id: 2,
			name: 'Avery Stweart',
			picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
			lastMessage: {
				text: 'I should buy a boat',
				timestamp: moment().subtract(1, 'days').toDate()
			}
		},
		{
			_id: 3,
			name: 'Katie Peterson',
			picture: picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
			lastMessage: {
				text: 'Bro, are you coming or what?',
				timestamp: moment().subtract(4, 'days').toDate()
			}
		},
		{
			_id: 4,
			name: 'Ray Edwards',
			picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
			lastMessage: {
				text: 'This is wicked awesome fluff!',
				timestamp: moment().subtract(2, 'weeks').toDate()
			}
		}
 ];
}