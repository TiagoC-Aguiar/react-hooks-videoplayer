import React from 'react'
import { ThemeProvider } from 'styled-components'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import StyledWbnPlayer from '../styles/StyledWbnPlayer'

const theme = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
}

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535',
}

const WbnPlayer = props => {
  
  const nightModeCallback = () => {
    console.log('nightmode callback')
  }

  const endCallback = () => {
    console.log('end callback');
    
  }

  const progressCallback = () => {
    console.log('progress callback');
    
  }

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
      <StyledWbnPlayer>
        <Video
          active={state.activeVideo}
          autoplay={state.autoplay}
          endCallback={endCallback}
          progressCallback={progressCallback}
        />
        <Playlist
          videos={state.videos}
          active={state.activeVideo}
          nightModeCallback={nightModeCallback}
          nightMode={state.nightMode}
        />

      </StyledWbnPlayer>
      ) : null}
    </ThemeProvider>

  )

}



export default WbnPlayer