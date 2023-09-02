import { FormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Form() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <FormContainer>
      <Input
        type="number"
        placeholder="CEP"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="rua"
        {...register('street')}
        error={errors.street?.message}
      />
      <div>
        <Input
          type="number"
          placeholder="Número"
          className="numero"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complemento"
          className="complemento"
          {...register('complement')}
          error={errors.complement?.message}
          rightText="Opcional"
        />
      </div>
      <div>
        <Input
          placeholder="Bairro"
          className="bairro"
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          placeholder="Cidade"
          className="cidade"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          className="uf"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </div>
    </FormContainer>
  )
}
