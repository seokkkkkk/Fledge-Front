import styled from "styled-components";
import tw from "twin.macro";

interface UserContainerProps {
    nickname: string;
    profile?: string;
}

const User = ({ nickname, profile }: UserContainerProps) => {
    return (
        <Container>
            <div>
                <Nickname>{nickname}</Nickname> 님,
                <span> 환영합니다!</span>
            </div>
            <Profile src={profile} alt="profile" />
        </Container>
    );
};

export default User;

const Container = styled.div`
    ${tw`
        text-medium-20
        font-medium
        text-fontColor1
        flex
        items-center
        gap-[2px]
    `}
`;

const Profile = styled.img`
    ${tw`
        ml-[20px] w-[44px] h-[44px] rounded-full object-cover
    `}
`;

const Nickname = styled.span`
    ${tw`
        text-bold-20
        font-bold
        text-fontColor1
    `}
`;
