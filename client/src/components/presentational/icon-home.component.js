import './icon-home.component.css';
import home from '../../assets/home.png';

const HomeIcon = () => {
  return (
    <div>
      <img src={home} className='home-icon'></img>
    </div>
  )
}

export default HomeIcon;