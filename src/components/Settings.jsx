import React, { useState } from 'react'
import { FullScreen } from '../icons/FullScreen'
import { ToggleSwitch } from './ToggleSwitch'

function Settings() {
  const [sound, setSound] = useState(false)
  const [streamerMode, setStreamerMode] = useState(false)

  return (
    <div className="w-[230px] bg-white absolute flex flex-col justify-center gap-5 right-0 top-10 p-5 rounded-xl">
      <button className="flex justify-between hover:bg-gray-100 py-[6px] px-1 rounded-md text-[#111]">
        Full screen
        <FullScreen />
      </button>
      <div className="m-1 flex justify-between">
        <p>Sound effects</p>
        <ToggleSwitch active={sound} handleClick={() => setSound(!sound)} />
      </div>
      <div className="m-1 flex justify-between">
        <p>Streamer mode</p>
        <ToggleSwitch
          active={streamerMode}
          handleClick={() => setStreamerMode(!streamerMode)}
        />
      </div>
    </div>
  )
}

export { Settings }