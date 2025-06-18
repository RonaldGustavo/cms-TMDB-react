// import { toAbsoluteUrl } from 'utilities';
export function FallbackView() {
  return (
    <div className="splash-screen">
      <img
        // src={toAbsoluteUrl('apple-touch-icon.png')}
        src={"/src/assets/images/media/icons/duotune/general/gen047.svg"}
        style={{ height: 50, width: 'auto' }}
        alt="Start logo"
      />
      <span>Loading ...</span>
    </div>
  );
}

