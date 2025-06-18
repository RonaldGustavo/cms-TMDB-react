import AsideMenuItem from './AsideMenuItem';
import { Dashboard, Home } from '../../../utilities/ImageImport';
import AsideMenuItemWithSub from './AsideMenuItemWithSub';

const AsideMenuMain = () => {
  return (
    <>
      <AsideMenuItemWithSub
        to="/menu1"
        title="Menu 1"
        icon={Dashboard}
        fontIcon="bi-layers"
        hasBullet={false}
      >
        <AsideMenuItem
          to="menu1"
          title="Sub Menu 1"
          fontIcon="bi-layers"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to={'menu2'}
        icon={Home}
        title={'Menu 2'}
        fontIcon="bi-app-indicator"
      />
    </>
  );
};

export default AsideMenuMain;
