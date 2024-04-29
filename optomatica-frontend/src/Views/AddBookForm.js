import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const pubdate = new Date(published).toISOString()

      const response = await axios.post("http://localhost:3000/api/v1/books", {
        title,
        author,
        published:pubdate,
        description,
      });
      if (response.status === 201) {
        setTitle("");
        setAuthor("");
        setPublished("");
        setDescription("");
      } else {
        throw new Error("Failed to add book");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{paddingTop:'3%',paddingHorizontal:'10%',height:'80vh',backgroundColor:'#77aabb'}}>
      <Typography variant="h4" gutterBottom style={{color:'white', paddingBottom:'5%'}}>
        Add New Book
      </Typography>
      <div style={{justifyContent:'center',display:'flex'}}>

      <form onSubmit={handleSubmit} style={{width:'50%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Published Date"
              type="date"
              value={published}
              onChange={(e) => setPublished(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Book"}
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography variant="body1" color="error">
                Error: {error}
              </Typography>
            </Grid>
          )}
        </Grid>
      </form>
      </div>
    </div>
  );
};

export default AddBookForm;
