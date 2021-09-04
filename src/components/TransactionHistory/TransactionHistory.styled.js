import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
	font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: #d8d8d8;
	font-size: 14px;
`;

export const TableBody = styled.tbody`
	text-align: left;
	border: none;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;
`;

export const TR = styled.tr`
`;

export const TH = styled.th`
  padding: .5em;
  border: 1px solid lightgrey;
`;
   
export const TD = styled.td`
  padding: .5em;
  border: 1px solid lightgrey;
`;