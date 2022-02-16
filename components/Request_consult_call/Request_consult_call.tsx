import s from "./Request_consult_call.module.scss"
import RequestConsultCallForm from "./Request_consult_call_form/Recuest_consult_call_form";
import Contacts from "./Contacts/Contacts";

const Request_consult_call = () => {
    return (<div className={s.Request_consult_call_layout}>
        <RequestConsultCallForm />
        <Contacts />

    </div>)
}
export default Request_consult_call