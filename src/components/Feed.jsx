//* Hooks
import { useState, useEffect} from 'react'

//* API
import { fetchFromAPI } from '../utils/fetchFromAPI'

//* Components
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {setVideos(data.items)})
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'colum', md: "row"}}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2} }}>
        <Sidebar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory} />

        <Typography className='copyright' variant= 'body2' sx={{ mt: 1.5, color: '#fff'}}>
          Copyright &copy;2022 
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto' }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{
          color: 'white'
        }}>
          
          {selectedCategory} <span style={{ color: '#F31503'}}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed