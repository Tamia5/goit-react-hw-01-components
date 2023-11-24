import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    background-color: #e4e7eb;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 70px 50px; 
    `;

export const Description = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 20px 15px;
`;

export const UserAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export const Tag = styled.p`
    color: #0505057d;
    font-size: 15px;
`;

export const Location = styled.p`
    color: #0505057d;
    font-size: 15px;
    margin-bottom: 10px;
`;

export const Stats = styled.ul`
    background-color: #FFFFFF;
    list-style: none;
    padding: 0px;
    display: flex;
`;

export const ListItem = styled.li`
    border: 1px solid #dcdee0;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
`;

export const Label = styled.span`
    font-size: 10px;
    color: #0505057d;
    font-weight: 500;

`;

export const Quantity = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-top: 5px;
`;