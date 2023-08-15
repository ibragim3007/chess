import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import { Button } from '../../../../shared/Buttons/Button';
import { Input } from '../../../../shared/Inputs/Input';
import { Container } from '../../../../shared/layouts/Container';
import { formSliceAction } from '../../store/reducers/formSlice';
import { useNavigate } from 'react-router-dom';
import { route } from '../../../../router/consts/routesConfig';

const FillNameInputs = () => {
  const { formData } = useAppSelector(state => state.formSliceReducer);
  const dispath = useAppDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath(formSliceAction.changeForm({ ...formData, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();

  const onClickStartGame = () => {
    navigate(route.game);
  };

  return (
    <Container style={{ flexDirection: 'column', gap: 25 }}>
      <Input
        onChange={onChangeInput}
        id="name"
        placeholder="Enter name"
        borderColor={formData.name.length > 2 ? 'success' : 'warning'}
        size={formData.name ? 'large' : 'normal'}
        value={formData.name}
        autoComplete="off"
        autoCapitalize="off"
        style={{ textAlign: 'center' }}
      />
      <Button onClick={onClickStartGame}>Play</Button>
    </Container>
  );
};

export default FillNameInputs;
