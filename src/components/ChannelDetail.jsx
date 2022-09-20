import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Gradient } from "@mui/icons-material"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const {id} = useParams()

  console.log(channelDetail)

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part="snippet&id=${id}`)
    .then((data) => setVideos(data?.items))
  }, [id])

  return (
    
    <Box minHeight="95vh">
      <Box>
        <div style={{ 
          background: 'linear-Gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184,1) 100%, rgba(0, 212, 255,1) 100%)',
          zIndex: 10,
          height: '300px'
          }}>
          </div>

          <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>

      <Box></Box>
    </Box>
  )
}

export default ChannelDetail