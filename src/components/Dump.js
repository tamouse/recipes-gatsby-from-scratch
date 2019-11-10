import React from "react"

const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: `1px solid #ef0000`,
      padding: 10,
      background: `#ccc`,
    }}
  >
    {Object.entries(props).map(([key, value], idx, allProps) => (
      <pre key={key}>
        <strong>{key} :</strong>
        {JSON.stringify(value, null, 2)}
      </pre>
    ))}
  </div>
)
export default Dump
