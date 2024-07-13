import P from 'prop-types';
import * as Styled from './styles';

// Alterar os elementos styled.desc e styles.boxbudget
export const Budget = ({
  icon: Icon,
  name,
  value,
  colorIcon = '#ccc',
  colorValue = '#838383',
  colorName = '#ccc',
  pointer = 'default',
}) => {
  return (
    <Styled.Container>
      <Styled.ContainerIcon pointer={pointer}>
        {Icon && <Icon size={20} color={colorIcon} />}
      </Styled.ContainerIcon>
      <Styled.ContainerDesc>
        <Styled.Desc size="xx-small" color={colorName}>
          {' '}
          {name}{' '}
        </Styled.Desc>
        <Styled.Desc size="x-small" color={colorValue}>
          {' '}
          {value}{' '}
        </Styled.Desc>
      </Styled.ContainerDesc>
    </Styled.Container>
  );
};
Budget.propTypes = {
  icon: P.elementType.isRequired,
  name: P.string.isRequired,
  value: P.oneOfType([P.string, P.number]).isRequired,
  colorIcon: P.string,
  colorValue: P.string,
  colorName: P.string,
  pointer: P.string,
};
