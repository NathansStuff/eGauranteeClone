export function Disruption(): JSX.Element {
  const divStyle = {
    backgroundImage: 'url(https://www.eguarantee.com.au/wp-content/uploads/2023/02/check-bg.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='flex-center flex-col text-center text-primary space-y-6 px-4 pb-4'>
      <div className='max-w-5xl flex-center flex-col space-y-6'>
        <h3 className='text-3xl pt-20' style={divStyle}>
          The time for <span className='font-bold'>disruption is now.</span>
        </h3>
        <p>
          Let&apos;s face it, banks have no incentive to change. For decades, they&apos;ve had a monopoly on this
          security arrangement, so they&apos;re not interested in innovating to provide a fairer service for all. While
          landlords face risks like fraud and payout injunction, tenants are denied access to their cash to fuel their
          business, Banks are happy to go along with the status quo.
        </p>
        <p className='font-bold'>Your business shouldn&apos;t be.</p>
      </div>
      {/* Video */}
      <div className='w-full flex-center max-w-4xl '>
        <div className='videoWrapper w-full'>
          <iframe
            src='https://player.vimeo.com/video/530605814?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=1#t='
            className='border rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}
