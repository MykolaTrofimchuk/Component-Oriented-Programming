import React from 'react';

const PaymentCategoryForm = ({ register, errors, isBudgetChecked, handleCheckboxChange }) => {
    const getOptions = () => {
        if (isBudgetChecked) {
            return (
                <>
                    <option key="taxes101" value="taxes101">101 Сплата суми податків і зборів</option>
                    <option key="vexel109" value="vexel109">109 Оплата податкового векселя</option>
                    <option key="fines121" value="fines121">121 Сплата адміністративного штрафу</option>
                </>
            );
        }
        return (
            <>
                <option key="other" value="other">Інші платежі</option>
                <option key="utilities" value="utilities">Комунальні платежі</option>
                <option key="internet" value="internet">Інтернет</option>
                <option key="insurance" value="insurance">Страхування</option>
            </>
        );
    };

    return (
        <fieldset>
            <legend>Категорія платежу</legend>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    value="budget"
                    checked={isBudgetChecked}
                    onChange={handleCheckboxChange}
                />
                <a>Бюджетний платіж (Податки, штрафи та інші платежі до бюджету)</a>
            </div>

            <select {...register('paymentCategory')}>
                {getOptions()}
            </select>
            {errors.paymentCategory && <span className="error">{errors.paymentCategory.message}</span>}
        </fieldset>
    );
};

export default PaymentCategoryForm;
