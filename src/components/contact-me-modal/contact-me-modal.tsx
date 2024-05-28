import { CloseIconModal } from "../../assets/icons"
import { ContactMeModalType } from "./types"
import "./contact-me-modal.scss"

const ContactMeModal = (props: ContactMeModalType) => {
  const { setVisible } = props
  const handleVisibleModal = () => {
    setVisible(false)
  }
  return (
    <div className="klz-contact-me-modal">
      <div className="klz-contact-me-modal-content">
        <div className="klz-contact-me-modal-header">
          <div onClick={handleVisibleModal}>
            <CloseIconModal/>
          </div>
          <p>
            Here you can tell me everything
          </p>
        </div>
        <div className="klz-contact-me-modal-body">
          <form>
            <input className="klz-contact-me-modal-input" type="text" placeholder="   From: Insert your Email"/><br />
            <textarea className="klz-contact-me-modal__textarea"/>
            <br />
            <button >Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactMeModal