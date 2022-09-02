import styles from "./Profile.module.css";
import Avatar from "../Avatar/Avatar";
import PropfileDescription from "../PropfileDescription/PropfileDescription";
import Posts from "../Posts/Posts";

const Profile = ({ state, avatar }) => {
  // console.log("userAvatar : ", avatar);
  return (
    <div className={styles.profile}>
      <img
        className={styles.profile__header}
        src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg"
      />
      <div className={styles.profile__box}>
        <Avatar src={avatar} />
        <PropfileDescription />
      </div>
      <div className={styles.block}>
        <h3>Сообщения:</h3>
        <input className={styles.input} placeholder="Введите сообщение" />
        <button className={styles.button}>Отправить</button>
        <Posts state={state} src={avatar} />
      </div>
    </div>
  );
};
export default Profile;
