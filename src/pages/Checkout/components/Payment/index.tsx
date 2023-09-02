import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentContainer, PaymentMethod, PaymentMethodContent } from './styles'
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
  },
  debit: {
    label: 'Cartão de Débito',
  },
  money: {
    label: 'Dinheiro',
  },
}

export function Payment() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentContainer>
      <div className="paymentDescription">
        <span className="currencyDollarSpan">
          <CurrencyDollar />
        </span>
        <div className="paymentTitlesWrapper">
          <p className="paymentTitle">Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <div className="paymentMethodsContainer">
        <PaymentMethod>
          <input
            type="radio"
            id="credit"
            value="credit"
            {...register('paymentMethod')}
          />
          <label htmlFor="credit">
            <PaymentMethodContent>
              <span>
                <CreditCard />
              </span>
              <p>Cartão de crédito</p>
            </PaymentMethodContent>
          </label>
        </PaymentMethod>

        <PaymentMethod>
          <input
            type="radio"
            id="debit"
            value="debit"
            {...register('paymentMethod')}
          />
          <label htmlFor="debit">
            <PaymentMethodContent>
              <span>
                <Bank />
              </span>
              <p>Cartão de débito</p>
            </PaymentMethodContent>
          </label>
        </PaymentMethod>

        <PaymentMethod>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('paymentMethod')}
          />
          <label htmlFor="money">
            <PaymentMethodContent>
              <span>
                <Money />
              </span>
              <p>Dinheiro</p>
            </PaymentMethodContent>
          </label>
        </PaymentMethod>
      </div>
      {paymentMethodError && <p>{paymentMethodError}</p>}
    </PaymentContainer>
  )
}
