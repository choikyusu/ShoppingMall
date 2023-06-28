interface UserProfile {
  userId: string;
  name: string;
  nickName: string;
  message: string;
  profileUrl: string;
  backgroundUrl: string;
}

interface UserResponseDto extends UserProfile {
  code: number;
  friendList: UserProfile[];
}

interface UserInfo extends UserProfile {
  friendList: UserProfile[];
}

interface ProfileRequestDto {
  nickName: string;
  message: string;
  profileUrl: string;
  backgroundUrl: string;
}

type ChangePopupType = 'NickName' | 'Message' | '';

type ProfileWindowType = 'Me' | 'Friend' | '';
