import Layout from '../components/Layout';
import Channels from '../components/Channels';

export default class extends React.Component {
  static async getInitialProps() {
    let req = await fetch('https://api.audioboom.com/channels/recommended');
    let { body: channels } = await req.json();
    return { channels };
  }

  render() {
    const { channels } = this.props;

    return (
      <Layout
        title="Podcast"
      >
        <Channels
          channels={channels}
        />
      </Layout>
    )
  }
}