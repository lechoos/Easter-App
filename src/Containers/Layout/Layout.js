const Layout = props => {
  return (
    <>
      <div>{props.header}</div>
      <div className='content'>{props.content}</div>
      <div>{props.footer}</div>
    </>
  )
}

export default Layout;