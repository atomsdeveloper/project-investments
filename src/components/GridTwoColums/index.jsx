import * as Styled from './styles';
import axios from 'axios';

// Components
import { Budget } from '../Budget';

// Hooks
import { useEffect, useState } from 'react';

// Utils
import { formatPercentage, formatPrice } from '../../utils/format';

export const Content = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchSale = async () => {
      try {
        await axios
          .get('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')
          .then((response) => setValue(response.data));
      } catch (e) {
        console.error('Error in search products.', e);
      }
    };

    window.addEventListener('reload', () => alert('carregou'));
    fetchSale();
  }, []);

  const { snapshotByPortfolio = {} } = value?.data ?? {};
  const {
    equity,
    valueApplied,
    equityProfit,
    percentageProfit,
    indexerValue,
    percentageOverIndexer,
  } = snapshotByPortfolio;

  return (
    <Styled.Container>
      <Styled.Aside> Teste </Styled.Aside>
      <Styled.Content>
        <Styled.Title>Renda Fixa</Styled.Title>
        <Styled.Section>
          <Styled.BgBudget>
            <Budget
              name="Saldo Bruto"
              value={formatPrice(equity)}
              colorIcon={'#838383'}
              colorValue={'#3CA8D6'}
              sizeName="x-small"
              sizeValue="small"
              colorName={'#838383'}
              pointer={'pointer'}
            />
          </Styled.BgBudget>
          <Styled.BgBudget>
            <Budget
              name="Valor Aplicado"
              value={formatPrice(valueApplied)}
              colorIcon={'#838383'}
              colorValue={'#3CA8D6'}
              sizeName="x-small"
              sizeValue="small"
              colorName={'#838383'}
              pointer={'pointer'}
            />
          </Styled.BgBudget>
          <Styled.BgBudget>
            <Budget
              name="Resultado"
              value={formatPrice(equityProfit)}
              colorIcon={'#838383'}
              colorValue={'#3CA8D6'}
              colorName={'#838383'}
              sizeName="x-small"
              sizeValue="small"
              pointer={'pointer'}
            />
          </Styled.BgBudget>
          <Styled.BgBudget>
            <Budget
              name="Rentabilidade"
              value={formatPercentage(percentageProfit)}
              colorIcon={'#838383'}
              colorValue={'#3CA8D6'}
              colorName={'#838383'}
              sizeName="x-small"
              sizeValue="small"
              pointer={'pointer'}
            />
          </Styled.BgBudget>
          <Styled.BgBudget>
            <Budget
              name="cdi"
              value={formatPercentage(indexerValue)}
              colorIcon={'#838383'}
              colorValue={'#3CA8D6'}
              colorName={'#838383'}
              sizeName="x-small"
              sizeValue="small"
              pointer={'pointer'}
            />
          </Styled.BgBudget>
          <Styled.BgBudget>
            <Budget
              name="% sobre o cdi"
              value={formatPercentage(percentageOverIndexer)}
              colorIcon={'#838383'}
              colorValue={'#3CA8D6'}
              colorName={'#838383'}
              sizeName="x-small"
              sizeValue="small"
              pointer={'pointer'}
            />
          </Styled.BgBudget>
        </Styled.Section>
      </Styled.Content>
    </Styled.Container>
  );
};
