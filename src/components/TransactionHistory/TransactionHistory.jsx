import {Transaction, HeaderTable, TableName, TransactionRow, TransactionTableData } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Transaction className='transaction-history'>
            <HeaderTable>
                <tr>
                    <TableName>Type</TableName>
                    <TableName>Amounnt</TableName>
                    <TableName>Currency</TableName>
                </tr>
            </HeaderTable>
            <tbody>
                {items.map(({ id, type, amount, currency }, index) =>
                    <TransactionRow key={id} isGray={index % 2 !== 0}>
                        <TransactionTableData>{type}</TransactionTableData>
                        <TransactionTableData>{amount}</TransactionTableData>
                        <TransactionTableData>{currency}</TransactionTableData>
                    </TransactionRow>
                )}
            </tbody>
        </Transaction>
    )
}

export default TransactionHistory;