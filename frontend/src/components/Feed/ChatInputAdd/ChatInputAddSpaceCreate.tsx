import styles from "./ChatInputAddSpaceCreate.module.css";
import Button from "../../ui/Button";
import CloseIcon from "../../../assets/svg/close1.svg?react";
import { useMenuPortal } from "../../../context/MenuPortalContext";

const ChatInputAddSpaceCreate = () => {
  const { portalRef } = useMenuPortal();
  return (
    <div className="modal">
      <div className={styles.wrapper} ref={portalRef}>
        <div>
          <h1>New Space</h1>
          <Button variant="button2">
            <CloseIcon />
          </Button>
        </div>
        <form>
          <div>
            <label htmlFor="newSpace">Space name *</label>
            <input type="text" id="newSpace" name="newSpace" className="inputRepository" />
          </div>
          <div></div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default ChatInputAddSpaceCreate;
