
import React, { useState }  from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

function SearchBar({ setQuery }) {
    const [search, setSearch] = useState('');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setQuery(search);
        }
    };
    
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon style={{color:'#D8D8D8'}}/>
                    </IconButton>
                </InputAdornment>
            )}}
            onKeyDown={handleKeyDown}
            sx={{
                borderRadius: 7,
                borderColor: '#D8D8D8',
                width: '100%',
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 7,
                    borderColor: '#D8D8D8',
                  },
                  '&:hover fieldset': {
                    borderColor: '#D8D8D8',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D8D8D8',
                  },
                },
                marginBottom: 5
              }}
        />
      </div>
    );
  }
  
  export default SearchBar;
  