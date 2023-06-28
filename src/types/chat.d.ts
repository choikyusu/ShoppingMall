type RoomType = 'Individual' | 'Group' | 'OneToOne';

interface CreateRoomRequest {
  type: RoomType;
  identifier: string;
  roomName: string;
  participantList: string[];
}

interface CreateRoomResponse {
  type: RoomType;
  identifier: string;
  roomName: string;
  participantList: string[];
}

interface MessageResponse {
  index: number;
  message: string;
  sendUserId: string;
  createdAt: string;
}

interface LastMessageResponse {
  userId: string;
  lastReadChatNo: number;
}

interface ParticipantResponse {
  _id: string;
  roomName: string;
  newChat: number;
  lastReadChatNo: 0;
  roomObjectId: {
    type: RoomType;
    lastMessageObjectId: {
      sendUserId: string;
      notRead: number;
      index: number;
      message: string;
      createdAt: string;
    };
    participantList: {
      lastReadChatNo: number;
      userId: string;
      userObjectId: UserProfile;
    }[];
  };
}
