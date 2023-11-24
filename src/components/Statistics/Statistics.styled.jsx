import styled from "@emotion/styled";

const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Section = styled.section`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  background-color: #ffff;
  text-align: center;
  padding: 40px;
  text-transform: uppercase;
  color: #0505057d;
`

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 40px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color || generateRandomColor()};
`

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
  color: ##EDEDED;
`

export const Percentage = styled.span`
  font-size: 18px;
  color: ##EDEDED;
  font-weight: 600;
`