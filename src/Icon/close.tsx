import * as React from 'react'

const Close = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M200 56 56 200M200 200 56 56"
    />
  </svg>
)

export default Close
