import Link from 'next/link';
import Head from 'next/head';

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <header><Link href="/"><a>Podcast</a></Link></header>
        { children }

        <style jsx global>{`
          :global(*) {
            box-sizing: border-box;
          }
          :global(body) {
            padding: 0;
            margin: 0;
            font-family: system-ui;
          }
        `}</style>
        <style jsx>{`
          header {
            color: #ffffff;
            background: #8756ca;
            height: 50px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          header a {
            color: #ffffff;
            text-decoration: none;
          }
        `}</style>
      </>
    )
  }
}