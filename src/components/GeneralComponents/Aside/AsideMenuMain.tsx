import AsideMenuItem from './AsideMenuItem';
import { Dashboard } from '../../../utilities/ImageImport';
import AsideMenuItemWithSub from './AsideMenuItemWithSub';

const AsideMenuMain = () => {
  return (
    <>
      <AsideMenuItemWithSub
        to="/"
        title="Movies"
        icon={Dashboard}
        fontIcon="bi-layers"
        hasBullet={false}
      >
        <AsideMenuItem
          to="popularmovie"
          title="Popular Movie"
          fontIcon="bi-layers"
          hasBullet={true}
        />
        <AsideMenuItem
          to="playingmovie"
          title="Now Playing"
          fontIcon="bi-layers"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
    </>
  );
};

export default AsideMenuMain;
