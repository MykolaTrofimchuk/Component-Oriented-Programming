import React from 'react';

const SenderForm = ({ register, errors, commission, totalAmount }) => (
    <fieldset>
        <legend>Відправник</legend>
        <label>
            ПІБ відправника:
            <input type="text" {...register('senderName')} />
            {errors.senderName && <span className="error">{errors.senderName.message}</span>}
        </label>
        <label>
            Номер телефону:
            <input type="text" {...register('phoneNumber')} />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
        </label>
        <label>
            Сума (грн):
            <input type="number" {...register('amount')} />
            {errors.amount && <span className="error">{errors.amount.message}</span>}
        </label>
        <p>Комісія: {commission} грн</p>
        <p>До сплати: {totalAmount} грн</p>
    </fieldset>
);

export default SenderForm;
