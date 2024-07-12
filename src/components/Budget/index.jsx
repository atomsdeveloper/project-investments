import P from 'prop-types';
import * as Styled from './styles';

export const Budget = ({ icon: Icon, name, value }) => {
  return (
    <Styled.Budget>
      <Styled.BoxBudget>{Icon && <Icon size={20} />}</Styled.BoxBudget>
      <Styled.BoxBudget>
        <Styled.Desc size="xx-small"> {name} </Styled.Desc>
        <Styled.Desc size="small">{value}</Styled.Desc>
      </Styled.BoxBudget>
    </Styled.Budget>
  );
};
Budget.propTypes = {
  icon: P.elementType.isRequired,
  name: P.string.isRequired,
  value: P.oneOfType([P.string, P.number]).isRequired,
};
