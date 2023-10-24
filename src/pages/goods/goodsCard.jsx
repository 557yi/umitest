
import styles from './goodscard.css'
import { Link } from 'umi';


export default function GoodsCard(props) {
  return (
    <div className={styles.ib}>
      {/* <img src={props.imgurl} alt={props.name}>
      </img>
      <p>
        {props.info.name}
      </p>
      <span>现在的价格：{props.info.discountPrice}</span><span>折前:{props.info.price}</span>
 */}
      <div className={styles.ib + ' ' + styles.product}>
        <ul>
          <li className={styles.productli}>
            <div className={styles.pro_img}>
              <div href="#" className={styles.pro_imga}>
                
                 <Link to="/list">
                 <img src={props.info.imgurl} alt={props.info.name} className={styles.pro_imgimg}></img>
            </Link>
              </div>
               {/* <Link to="/">
                限时折扣
            </Link> */}
            </div>
            <div className={styles.productlih3}>
              <a href="#" className={styles.productlih3a}>
                {props.info.name}
              </a>
              <br></br>
              <div className={styles.pricedel }>
                <span >{props.info.discountPrice}</span>
                <del>{props.info.price}</del></div>
            </div>
            {/* <p class="desc">全高清屏 / 人工智能语音</p> */}



            {/* <div className={styles.review}>
					<a href="#" className={styles.reviewa}>
						<span  className={styles.reviewaspan}>{props.info.description}</span>
						
					</a> */}
            {/* </div> */}
          </li>
        </ul>
      </div>



    </div>
  );
}