import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/books");
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  if (loading) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="body1">Error: {error.message}</Typography>;
  }

  return (
    <div>
      <Typography variant="h2" gutterBottom style={{color:'white'}}>
        Books Inventory
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: "#f0f0f0" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Publication Date</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBooks.map((book,i) => (
              <TableRow key={book.id} style={i===1?{backgroundColor:'$#F0EBE3'}:null}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.published.split("T")[0]}</TableCell>
                <TableCell>{book.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(books.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center", backgroundColor:'#9B3922' }}
      />
    </div>
  );
};

export default MainPage;
