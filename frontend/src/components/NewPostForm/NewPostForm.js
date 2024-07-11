import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const defaultTheme = createTheme();

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const addPost = (title, content) => {
    console.log(title, content)
    navigate('/forum')
    alert("Post added successfully")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost({ title, content });
      setTitle('');
      setContent('');
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#E12362" }}>
            <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Post
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="content"
              label="Content"
              name="content"
              autoComplete="content"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height: 50, backgroundColor:"#E12362", '&:hover': {backgroundColor: "#C2185B" }}}
            >
              Post
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={handleGoBack}
              sx={{ mt: 1, mb: 2, height: 50 }}
            >Return</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NewPostForm;
