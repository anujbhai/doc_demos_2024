import { memo } from "react";

function Search(props) {
  const {onChange} = props;

  console.log('Search rendered')

  return (
    <>
      <input 
        type="text"
        placeholder="Search users..."
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default memo(Search)

