import { observer } from "mobx-react-lite";
import { Toast, ToastContainer } from "react-bootstrap";
import { toast } from "../../BLL/Toast";

export const NotificationToast = observer(() => {
  return (
    <ToastContainer style={{margin:10}}  position="bottom-end">
    <Toast autohide delay={3000} id="notification-toast" show={toast.title !== ""} onClose={toast.hide}>
      <Toast.Header id="notification-toast-header">
        <i className="bi bi-bell"></i>
        <strong className="me-auto">Notification</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body id="notification-toast-body">{toast.title}</Toast.Body>
    </Toast>
    </ToastContainer>
  );
});
