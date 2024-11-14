import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RecipientForm from './RecipientForm.jsx';
import PaymentCategoryForm from './PaymentCategoryForm.jsx';
import SenderForm from './SenderForm.jsx';
import '../App.css';

const schema = yup.object().shape({
    edrpouOrRnokpp: yup
        .string()
        .matches(/^\d{8,10}$/, "ЄДРПОУ повинен містити від 8 до 10 цифр")
        .required("Поле обов'язкове"),
    recipientName: yup
        .string()
        .min(3, "Найменування одержувача повинно містити не менше ніж 3 символи")
        .required("Назва одержувача обов'язкова"),
    iban: yup
        .string()
        .matches(/^UA\d{27}$/, "Введіть дійсний IBAN рахунок, що починається з 'UA' та містить 29 символів")
        .required("IBAN рахунок обов'язковий"),
    paymentCategory: yup.string().required("Виберіть категорію платежу"),
    paymentPurpose: yup.string().required("Призначення платежу обов'язкове"),
    senderName: yup.string().required("ПІБ відправника обов'язкове"),
    phoneNumber: yup
        .string()
        .matches(/^\+380\d{9}$/, "Введіть дійсний номер телефону у форматі +380XXXXXXXXX")
        .required("Номер телефону обов'язковий"),
    amount: yup
        .number()
        .typeError("Сума повинна бути числом")
        .min(10, "Мінімальна сума – 10 грн")
        .max(29000, "Максимальна сума – 29 000 грн")
        .required("Сума обов'язкова"),
});

const PaymentForm = () => {
    const [isBudgetChecked, setIsBudgetChecked] = useState(false);
    const [commission, setCommission] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        resolver: yupResolver(schema),
    });

    const amount = watch('amount');

    useEffect(() => {
        if (amount) {
            const parsedAmount = parseFloat(amount);
            if (!isNaN(parsedAmount)) {
                const calculatedCommission = 4 + (parsedAmount * 0.02); // 4 грн + 2% від суми
                const calculatedTotalAmount = parsedAmount + calculatedCommission;
                setCommission(calculatedCommission.toFixed(2));
                setTotalAmount(calculatedTotalAmount.toFixed(2));
            } else {
                setCommission(0);
                setTotalAmount(0);
            }
        } else {
            setCommission(0);
            setTotalAmount(0);
        }
    }, [amount]);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleCheckboxChange = () => {
        setIsBudgetChecked(prevState => !prevState);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
            <h2>Оплата рахунку за реквізитами</h2>
            <p>Кошти буде зараховано наступного банківського дня.</p>

            <RecipientForm register={register} errors={errors} />
            <PaymentCategoryForm
                register={register}
                errors={errors}
                isBudgetChecked={isBudgetChecked}
                handleCheckboxChange={handleCheckboxChange}
            />
            <fieldset>
                <legend>Призначення платежу</legend>
                <textarea {...register('paymentPurpose')} placeholder={'Вкажіть призначення платежу'}/>
                {errors.paymentPurpose && <span className="error">{errors.paymentPurpose.message}</span>}
            </fieldset>

            <SenderForm
                register={register}
                errors={errors}
                commission={commission}
                totalAmount={totalAmount}
            />

            <button type="submit">Надіслати</button>
        </form>
    );
};

export default PaymentForm;
