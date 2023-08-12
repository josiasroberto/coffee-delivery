import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { PaymentContainer, PaymentMethod, PaymentMethodContent } from './styles'

export function Payment() {
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
          <input type="radio" id="credit" name="radio" />
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
          <input type="radio" id="bank" name="radio" />
          <label htmlFor="bank">
            <PaymentMethodContent>
              <span>
                <Bank />
              </span>
              <p>Cartão de débito</p>
            </PaymentMethodContent>
          </label>
        </PaymentMethod>

        <PaymentMethod>
          <input type="radio" id="cash" name="radio" />
          <label htmlFor="cash">
            <PaymentMethodContent>
              <span>
                <Money />
              </span>
              <p>Dinheiro</p>
            </PaymentMethodContent>
          </label>
        </PaymentMethod>
      </div>
    </PaymentContainer>
  )
}
