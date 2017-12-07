function BasicTable(props) {
  const info = {
	title: "Tilte",
	body: "Body"
}

  return (
      <Table className="Table1">
        <TableHead>
          <TableRow>
            <TableCell>Something</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow key="1">
                <TableCell>{info.title}</TableCell>
                <TableCell numeric>{info.body}</TableCell>
              </TableRow>
        </TableBody>
      </Table>
  );
}