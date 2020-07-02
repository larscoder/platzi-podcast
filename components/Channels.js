import Link from 'next/link';

export default class Channels extends React.Component {
  render() {
    const { channels } = this.props;

    return (
      <>
        <div className="channels">
          {channels.map((channel, index) => (
            <Link href={`/channel?id=${channel.id}`} prefetch key={index}>
              <a className="channel">
                <img src={channel.urls.logo_image.original} alt={channel.title}/>
                <h2>{channel.title}</h2>
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
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
            color: #000000;
            text-decoration: none;
            transition: .2s all;
          }
          .channel:hover {
            box-shadow: 0 2px 8px rgba(0,0,0,0.5);
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
        `}</style>
      </>
    )
  }
}