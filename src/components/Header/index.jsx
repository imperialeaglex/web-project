import { Menu } from 'components/Menu';
import { Video } from 'components/Video';

export const Header = () => {
  return (
    <>
      <div className="overlay"/>
      <Menu/>
      <Video/>
    </>
  );
};