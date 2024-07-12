// Components
import * as Styled from './styles';
import { Budget } from '../Budget/index';

// Hooks
import axios from 'axios';
import { useEffect, useState } from 'react';

// Icons
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
// import { TbCircleArrowUpFilled } from 'react-icons/tb';
// import { TbCircleArrowUpRightFilled } from 'react-icons/tb';
// import { IoIosArrowDropdownCircle } from 'react-icons/io';

// Utils
import { formatPrice } from '../../utils/format';

export const Nav = () => {
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
  const { equity } = snapshotByPortfolio;

  return (
    <Styled.Container>
      <Styled.Logo>
        <img src="images/logo.svg" alt="Logo of Page" />
      </Styled.Logo>
      <Styled.ItemsMenu>
        <Budget
          icon={RiMoneyDollarCircleFill}
          name="Saldo Bruto"
          value={formatPrice(equity)}
        />
        <Budget
          icon={RiMoneyDollarCircleFill}
          name="Valor Aplicado"
          value={formatPrice(equity)}
        />
        <Budget
          icon={RiMoneyDollarCircleFill}
          name="Rentabilidade"
          value={formatPrice(equity)}
        />
        <Budget icon={RiMoneyDollarCircleFill} name="Carteira" value="Minha Carteira" />
      </Styled.ItemsMenu>
    </Styled.Container>
  );
};
