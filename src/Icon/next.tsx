import * as React from 'react'

const Next = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={16}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m96 48 80 80-80 80"
    />
  </svg>
)

export default Next
