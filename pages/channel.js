import Link from 'next/link';

export default class Channel extends React.Component {
  static async getInitialProps({ query }) {
    let idChannel = query.id;

    let [reqChannel, reqAudios, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ]);

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;

    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;

    return { channel, audioClips, series };
  }

  render() {
    const { channel, audioClips, series } = this.props;

    return (
      <>
        <header>Podcast</header>
        <div className="box-banner">
          {channel.urls.banner_image.original ?
            <img src={channel.urls.banner_image.original} alt="Banner Podcast" className="banner"/>
            :
            <img src={channel.urls.logo_image.original} alt="Banner Podcast" className="banner"/>
          }
          <div className="banner-title">
            {channel.title}
          </div>
        </div>

        <div className="channel-content">
          <h2>Últimos Podcast</h2>
          { audioClips.map((clip, index) => (
            <Link href={`/podcast?id=${clip.id}`} key={index}>
              <a className='link-podcast'>
                { clip.title }
              </a>
            </Link>
          )) }
        </div>

        {series &&
          <div className="channel-content">
            <h2>Series</h2>
            { series.map((serie, index) => (
              <div key={index}>
                { serie.title }
              </div>
            )) }
          </div>
        }

        <style jsx>{`
          :global(*) {
            box-sizing: border-box;
          }
          :global(body) {
            padding: 0;
            margin: 0;
            font-family: system-ui;
          }
          header {
            color: #ffffff;
            background: #8756ca;
            height: 50px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
            margin-bottom:0.5em;
          }
          .channel img {
            width: 100%;
          }
          .channel h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weaight: 600;
            margin: 0;
            text-align: center;
          }
          .box-banner {
            width: 100%;
            position: relative;
            margin-bottom: 20px;
          }
          .banner {
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .banner-title {
            width: 100%;
            background: rgba(0,0,0,0.75);
            padding: 20px;
            position: absolute;
            left: 0;
            bottom: 0;
            color: #ffffff;
            font-weight: bold;
          }
          .channel-content {
            padding: 0 20px;
          }
          .link-podcast {
            display: block;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: rgba(135,86,202,0.1);
            text-decoration: none;
            color: #8756ca;
            transition: .2s all;
          }
          .link-podcast:hover {
            color: #ffffff;
            background-color: rgba(135,86,202,1);
          }
        `}</style>
      </>
    )
  }
}