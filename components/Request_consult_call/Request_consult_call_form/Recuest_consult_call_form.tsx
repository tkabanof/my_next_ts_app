import React from 'react';
import s from "./RequestConsultCallForm.module.scss"

const RequestConsultCallForm = () => {
    return (<div className={s.request_consult_call_form_layout}>
        <div className={s.request_consult_call_form_head}>
            <p>Нужна консультация?</p>
        </div>
        <div className={s.input_box}>
            <input type="text" placeholder="Ваше имя"/>
            <input type="tel" placeholder="Номер телефона"/>
        </div>
        <button className={s.button}>Получить консультацию</button>
        <div className={s.request_consult_call_form_head_bottom}>
            <p>Нажимая на кнопку, вы принимаете Положение и Согласие на обработку персональных данных.</p>
        </div>
    </div>)
};

export default RequestConsultCallForm;