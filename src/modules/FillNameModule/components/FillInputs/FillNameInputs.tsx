import React from 'react';
import { Input } from '../../../../shared/Inputs/Input';
import { Button } from '../../../../shared/Buttons/Button';
import { Container } from '../../../../shared/layouts/Container';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/reduxHooks';
import { formSliceAction } from '../../store/reducers/formSlice';

const FillNameInputs = () => {
  const { formData } = useAppSelector(state => state.formSliceReducer);
  const dispath = useAppDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath(formSliceAction.changeForm({ ...formData, [e.target.id]: e.target.value }));
  };

  return (
    <Container style={{ flexDirection: 'column', gap: 25 }}>
      <Input
        onChange={onChangeInput}
        id="name"
        placeholder="Enter name"
        borderColor="warning"
        size="large"
        value={formData.name}
      />
      <Button>Play</Button>
    </Container>
  );
};

export default FillNameInputs;
