import Ellipse from './icon/Ellipse.svg';
import Polygon from './icon/Polygon.svg';
import styles from './index.module.css';

export const PlayerItem = () => {
	return (
		<div className={styles['player-item']}>
			<Ellipse className={styles['player-item-elipse']}  width={100} height={100}/>
			<Polygon className={styles['player-item-polygon']} width={24} height={24} />
		</div>
	);
};