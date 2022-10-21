import React, {useState} from 'react'

function AddItem({addItem}: any) {

  const [label, setLabel] = useState('')
  const [showInput, setShowInput] = useState(false)

  const onSubmit = (label: string) => {
    setLabel('')
    setShowInput(false)
    addItem(label)
  }

  const openAddItem = () => {
    setShowInput(!showInput)
  }

  return (
    <div>
      <span onClick={() => openAddItem()}>+</span>
      {showInput &&
        <>
          <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} autoFocus></input>
          <button onClick={() => onSubmit(label)}>Add</button>
        </>
      }
    </div>
  )
}

export default AddItem