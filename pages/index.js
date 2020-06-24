export default class extends React.Component {
  render() {
    return (
      <>
        <h1>Hola mundo!</h1>
        <p>Holasss</p>

        <style jsx>{`
          h1 {
            color: green;
          }
          p {
            color: red;
          }
        `}</style>
      </>
    )
  }
}