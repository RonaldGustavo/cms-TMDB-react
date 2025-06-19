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
        <AsideMenuItem
          to="upcomingmovie"
          title="Up Coming"
          fontIcon="bi-layers"
          hasBullet={true}
        />
        <AsideMenuItem
          to="topratedmovie"
          title="Top Rated"
          fontIcon="bi-layers"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to="/"
        title="Genres"
        icon={Dashboard}
        fontIcon="bi-layers"
        hasBullet={false}
      >
        <AsideMenuItem
          to="genremovie"
          title="Movie"
          fontIcon="bi-layers"
          hasBullet={true}
        />
        <AsideMenuItem
          to="genretv"
          title="TV"
          fontIcon="bi-layers"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to="/"
        title="Providers"
        icon={Dashboard}
        fontIcon="bi-layers"
        hasBullet={false}
      >
        <AsideMenuItem
          to="providermovie"
          title="Movie"
          fontIcon="bi-layers"
          hasBullet={true}
        />
        <AsideMenuItem
          to="providertv"
          title="TV"
          fontIcon="bi-layers"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
    </>
  );
};

export default AsideMenuMain;
