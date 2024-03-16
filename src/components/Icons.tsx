import { LucideProps, UserPlus } from 'lucide-react'

export const Icons = {
  Logo: (props: LucideProps) => (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Home" />

      <g id="Print" />

      <g id="Mail" />

      <g id="Camera" />

      <g id="Video" />

      <g id="Film" />

      <g id="Message">
        <path
          d="M24,1h-7.9H8C4.1,1,1,4.1,1,8v10c0,3.5,2.6,6.4,6,6.9V30c0,0.4,0.2,0.7,0.5,0.9C7.7,31,7.8,31,8,31   c0.2,0,0.4-0.1,0.6-0.2l7.5-5.6l0.3-0.2H24c3.9,0,7-3.1,7-7V8C31,4.1,27.9,1,24,1z"
          fill="#655de8"
        />

        <path d="M16.1,7v2H8C7.5,9,7,8.5,7,8s0.5-1,1-1H16.1z" fill="#34B0C0" />

        <path
          d="M16.1,13v2H8c-0.5,0-1-0.5-1-1s0.5-1,1-1H16.1z"
          fill="#34B0C0"
        />

        <g>
          <path
            d="M8,9h8.1H24c0.5,0,1-0.5,1-1s-0.5-1-1-1h-7.9H8C7.5,7,7,7.5,7,8S7.5,9,8,9z"
            fill="#FFC10A"
          />

          <path
            d="M24,13h-7.9H8c-0.5,0-1,0.5-1,1s0.5,1,1,1h8.1H24c0.5,0,1-0.5,1-1S24.5,13,24,13z"
            fill="#FFC10A"
          />
        </g>
      </g>

      <g id="Telephone" />

      <g id="User" />

      <g id="File" />

      <g id="Folder" />

      <g id="Map" />

      <g id="Download" />

      <g id="Upload" />

      <g id="Video_Recorder" />

      <g id="Schedule" />

      <g id="Cart" />

      <g id="Setting" />

      <g id="Search" />

      <g id="Pencils" />

      <g id="Group" />

      <g id="Record" />

      <g id="Headphone" />

      <g id="Music_Player" />

      <g id="Sound_On" />

      <g id="Sound_Off" />

      <g id="Lock" />

      <g id="Lock_open" />

      <g id="Love" />

      <g id="Favorite" />

      <g id="Film_1_" />

      <g id="Music" />

      <g id="Puzzle" />

      <g id="Turn_Off" />

      <g id="Book" />

      <g id="Save" />

      <g id="Reload" />

      <g id="Trash" />

      <g id="Tag" />

      <g id="Link" />

      <g id="Like" />

      <g id="Bad" />

      <g id="Gallery" />

      <g id="Add" />

      <g id="Close" />

      <g id="Forward" />

      <g id="Back" />

      <g id="Buy" />

      <g id="Mac" />

      <g id="Laptop" />
    </svg>
  ),
  UserPlus,
}

export type Icon = keyof typeof Icons
