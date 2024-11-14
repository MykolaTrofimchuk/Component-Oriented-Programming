import React from 'react';

const RecipientForm = ({ register, errors }) => (
    <fieldset>
        <legend>Одержувач</legend>
        <label>
            ЄДРПОУ або РНОКПП:
            <input type="text" {...register('edrpouOrRnokpp')} />
            {errors.edrpouOrRnokpp && <span className="error">{errors.edrpouOrRnokpp.message}</span>}
        </label>
        <label>
            Назва одержувача:
            <input type="text" {...register('recipientName')} />
            {errors.recipientName && <span className="error">{errors.recipientName.message}</span>}
        </label>
        <label>
            Рахунок IBAN:
            <input type="text" {...register('iban')} />
            {errors.iban && <span className="error">{errors.iban.message}</span>}
        </label>
    </fieldset>
);

export default RecipientForm;