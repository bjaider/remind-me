import React from 'react'
import '../styles/GridCells.css'
type CellsProps = {
  hours: string[]
}
const GridCells: React.FC<CellsProps> = ({hours}): any => {
  return hours.map((hour) => <div className="grid-cells-container">{hour}</div>)
}

export default GridCells
