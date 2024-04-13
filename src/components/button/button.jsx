function button(props) {
  return (
    <>
    <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
    style={{backgroundColor:props.bg}}
    onClick={() => props.change(props.bg)}>
        {props.bg}
    </button>
    </>
  )
}

export default button