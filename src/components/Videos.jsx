import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({videos, direction }) => {
  if(!videos?.length) return <div>Loading...s</div>;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} className='video-card'>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos