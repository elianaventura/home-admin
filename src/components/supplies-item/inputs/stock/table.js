import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";



export default function StockTable({ columns, items}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((colData, index) => (
              <TableCell key={index}>{colData.display}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.expiration_date}</TableCell>
              <TableCell>{item.brand.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
