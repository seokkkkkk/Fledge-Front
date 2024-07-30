import styled from "styled-components";
import tw from "twin.macro";

const ProfileHeader = () => {
    return (
        <Profile>
            <span className="title">마이페이지</span>
            <img
                className="profile-image"
                src="https://via.placeholder.com/150"
                alt="프로필"
            />
            <span className="profile-name">카드값줘체리</span>
            <span className="change-name">닉네임 변경</span>
        </Profile>
    );
};

export default ProfileHeader;

const Profile = styled.div`
    ${tw`
        flex flex-col items-center justify-center mt-[94px]
    `}

    .title {
        ${tw`
            text-bold-64 font-bold mb-[46px]
        `}
    }

    .profile-image {
        ${tw`
            w-[248px] h-[248px] rounded-full mb-[22px]
        `}
    }

    .profile-name {
        ${tw`
            text-bold-36 font-bold
        `}
    }

    .change-name {
        ${tw`
            text-medium-20 font-medium text-fontColor2  underline underline-offset-4 decoration-1 cursor-pointer
        `}
    }
`;