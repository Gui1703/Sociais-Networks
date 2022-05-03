import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 20px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 15px;

  h2 {
    font-size: 19px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    width: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Links = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 15px;
  gap: 10px;
  cursor: pointer;

  :nth-child(1) {
    background: linear-gradient(90deg, #ff7f55 0%, #fe3e57 100%);

    :hover {
      background: #fe3e57;
    }
  }
  :nth-child(2) {
    background: linear-gradient(90deg, #94f78e 0%, #37f707 100%);
    :hover {
      background: #37f707;
    }
  }
  :nth-child(3) {
    background: linear-gradient(90deg, #a663fc 0%, #5151ec 100%);
    :hover {
      background: #5151ec;
    }
  }
  :nth-child(4) {
    background: linear-gradient(90deg, #4c4f52 0%, #202225 100%);
    :hover {
      background: #202225;
    }
  }

  span,
  i {
    background: transparent;
  }

  i {
    font-size: 30px;
  }

  span {
    font-size: 20px;
    font-weight: 600;
  }

  @media screen and (min-width: 800px) {
    width: 380px;
    margin: 10px auto;
  }
`;
