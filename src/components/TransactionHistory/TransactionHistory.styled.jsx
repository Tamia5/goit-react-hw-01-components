import styled from "@emotion/styled";

export const Transaction = styled.table`
    width: 100%;
`;

export const HeaderTable = styled.thead`
    color: #ffff;
    background-color: #15c6d6;
`;

export const TransactionRow = styled.tr`
    background-color: ${props => props.isGray ? '#e8eded' : '#ffff'};
`;

export const TableName = styled.th`
    padding: 15px 0;
    text-transform: uppercase;
    font-size: 14px;

`;

export const TransactionTableData = styled.td`
    color: #0505057d;
    padding: 15px 0;
    text-transform: capitalize;
`;