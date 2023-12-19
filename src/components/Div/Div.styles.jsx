import styled from "styled-components";

export const DivContainer = styled.div`
  display: grid;
  padding: 10px;
  margin: 0px;
`;

export const Reminder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReminderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

export const FormDiv = styled.form`
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 5px 0;
`;
export const TaskDiv = styled.div`
  background-color: #eae7e7;
  padding: 2px;
  border-radius: 5px;
  margin: 5px 0px;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TaskItem = styled(HStack)`
  justify-content: space-between;
  font-size: large;
  font-weight: bold;
`;
