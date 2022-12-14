import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";
import MessagesItem from "../MessagesItem/MessagesItem";

const Dialogs = ({ state, userName, addMessage, onMessageChange }) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>
          {state.users.map((user) => {
            return (
              <DialogsItem
                dialogItem={user.name}
                id={user.id}
                src={user.avatar}
              />
            );
          })}
        </ul>
        <ul className={styles.messagesList}>
          {state.messages.map((message) => {
            return (
              <MessagesItem
                message={message.message}
                author={message.author}
                userName={userName}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.dialogsBox}>
        <textarea
          className={styles.dialogsTextarea}
          value={state.newDialogText}
          onChange={(e) => {
            onMessageChange({ text: e.target.value });
          }}
        ></textarea>
        <button
          className={styles.dialogsButton}
          onClick={() => {
            addMessage({ text: state.newDialogText });
          }}
        >
          Отправить сообщение
        </button>
      </div>
    </section>
  );
};

export default Dialogs;
