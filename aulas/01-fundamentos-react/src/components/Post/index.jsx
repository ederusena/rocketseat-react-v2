export function Post(props) {
  const { author, content } = props
  return (
    <div>
      <h2>{author}</h2>
      <h4>{content}</h4>
      <button className="btn">Hello daisyUI</button>
    </div>
  )
}
