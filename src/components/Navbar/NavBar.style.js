import styled from "styled-components";

export const Navbar_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: #0d0d38;
  padding: 10px 15px 10px 15px;
  font-size: 18px;
  background-color: white;
  width: 98%;
  position: static;
  height: 30px;
`;

export const LabelTitle = styled.label`
  margin-left: 50px;
`;

export const ButtonClose = styled.button`
  font-size: 14px;
  font-weight: 600;
  border: 2px solid #f7941d;
  background: #f7941d;
  color: #fff;
  max-width: 100px;
  max-height: 22px;
  border-radius: 5px;
  width: 100%;
  height: 72%;
  padding: 6px;
  margin-top: 19px;
`;
