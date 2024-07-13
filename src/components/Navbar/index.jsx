// Components
import * as Styled from './styles';
import axios from 'axios';

// Theme
import { theme } from '../../styles/theme';

// Hooks
import { useEffect, useState } from 'react';

// Icons
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { TbCircleArrowUpFilled } from 'react-icons/tb';
import { TbCircleArrowUpRightFilled } from 'react-icons/tb';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

// Utils
import { formatPrice, formatPercentage } from '../../utils/format';

// Components
import { Budget } from '../Budget/index';

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
  const { equity, valueApplied } = snapshotByPortfolio;

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
          colorValue={'#838383'}
        />
        <Budget
          icon={TbCircleArrowUpFilled}
          name="Valor Aplicado"
          value={formatPrice(valueApplied)}
          colorValue={'#838383'}
        />
        <Budget
          icon={TbCircleArrowUpRightFilled}
          name="Rentabilidade"
          value={formatPercentage(2.05)}
          colorValue={'#838383'}
        />
        <Budget
          icon={IoIosArrowDropdownCircle}
          name="Carteira"
          value="Minha Carteira"
          colorIcon={'#3CA8D6'}
          colorValue={'#838383'}
          colorName={'#838383'}
          pointer={'pointer'}
        />
        <Styled.MenuButton>
          <IoMenu size={17} color={theme.textColor.light} />
        </Styled.MenuButton>
      </Styled.ItemsMenu>
    </Styled.Container>
  );
};

