import Avatar from '../../assets/images/avatar.jpg';
import IconBadge from '../../assets/svg/badge.svg';
import IconSignOut from '../../assets/svg/iconSignOut.svg';
import Logo from '../../assets/svg/logo.svg';
import IconUser from '../../assets/svg/user.svg';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topSidebar}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={styles.menu}>
          <li className={styles.active}><img src={IconUser} alt='User' /></li>
          <li><img src={IconBadge} alt='IconBadge' /></li>
        </ul>
      </div>
      <div className={styles.profile}>
        <div className={styles.contentProfile}>
          <div className={styles.avatar}>
            <img src={Avatar} alt="avatar" />
          </div>
          <button className={styles.btnSignOut}><img src={IconSignOut} alt='IconSignOut' /></button>
        </div>

      </div>
    </div>
  );
}