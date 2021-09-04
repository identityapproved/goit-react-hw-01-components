import PropTypes from 'prop-types'
import { Table, TableBody, TableHead, TD, TH, TR } from './TransactionHistory.styled';

export const TransactionHistory = (({ transactions }) => {
   return (
      <Table>
   
         <TableHead>
            <TR>
               <TH>Type</TH>
               <TH>Amount</TH>
               <TH>Currency</TH>
            </TR>
         </TableHead>

         <TableBody>
            {transactions.map(({ id, type, amount, currency }) => (
               <TR key={id}>
                  <TD>{type}</TD>
                  <TD>{amount}</TD>
                  <TD>{currency}</TD>
               </TR>
         ))}
         </TableBody>
         
      </Table>
   )
});

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};