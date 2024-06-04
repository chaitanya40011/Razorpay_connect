import styled from "styled-components";
import { mobile } from "../responsive";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  justify-content: center;
  ${mobile({
    gridTemplateColumns: "200px",
  })}
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url("https://i.postimg.cc/XJwHrDCc/file.png");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  display: flex;
  align-items: center;
  // justify-content: center;
  padding: 10px;
  flex-direction: column;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  position: relative;
  top: 12px;
  font-size: 1.6rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.4;
  font-weight: 350;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: flex:
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  -webkit-transition: all 0.15s ease-in-out;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
  //  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #1f1e1e;
  position: relative;
  align-items: center;
  justify-content: center;

  display: flex;
  &:hover {
    transform: scale(1.02);
    background-color: #262424;
    color: white;
  }
  // top: 145px;
`;

export const CardStats = styled.div`
  padding: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #c9ced6;
  font-size: 1.5em;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #fff;
    text-shadow: 0 0 2px #03e9f4, 0 0 15px #03e9f4, 0 0 35px #03e9f4,
      0 0 80px #03e9f4;
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: #171715;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 155vh;
  position: relative;
  align-items: center;
`;

export const Contain = styled.div`
  display: flex;
  background-color: #171715;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: center;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const ElementBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  text-align: center !important;
`;

export const Elements = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  text-align: center !important;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.7px solid #ffff;
  // background-image: linear-gradient(180deg, #917e8b, #8c4976);
  background: #1f1e1e;
  border-radius: 10px;
  padding: 10px;
  padding-top: 5px;
  height: 50vh;
`;

export const Title = styled.div`
  font-weight: 350;
  color: #ebebeb;
  font-size: 3rem;
  line-height: 1;
  display: flex;
  margin-bottom: 30px;
  ${mobile({
    fontSize: "2.0rem",
  })}
`;

export const Title2 = styled(Title)`
  font-weight: 200;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 10px;
  margin-top: 10px;
  ${mobile({
    fontSize: "1.2rem",
    fontWeight: "200",
  })}
`;

export const Title3 = styled(Title)`
  font-weight: 200;
  color: #fffff;
  font-size: 1.2rem;
  top: 25px;
  line-height: 1;
  display: flex;
  position: relative;
  // justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  ${mobile({
    fontSize: "1rem",
    fontWeight: "330",
  })}
`;

export const Spacer = styled.div`
  line-height: 1;
  margin-bottom: 20px;
  margin-top: 20px;
  ${mobile({
    marginBottom: "10px",
    marginTop: "10px",
  })}
`;

export const InputLabel = styled.label`
  top: 53px;
  right: 45px;
  color: #8d8d8d;
  position: relative;
  display: flex;
  ${mobile({
    right: "22px",
    fontSize: "1em",
  })}
`;

export const Input = styled.input`
  display: flex;
  top: 50px;
  text-align: left;
  background: transparent;
  padding: 0.3em;
  flex-direction: coloumn;
  position: relative;
  // left: 0px;
  z-index: 1;
  transition: 0.2s ease all;
  color: white;
  border-radius: 0;
  border-width: 0 0 1px;
  border-bottom-color: white;
  height: 30px;
  width: 50%;
  // padding: 0px;d
  font-size: 1em;
  font-weight: lighter;
  &:hover {
    box-shadow: none;
    border-bottom-color: white;
    outline: 0 none;
    transition-duration: 0.3s;
    width: 80%;
  }
  &:focus {
    box-shadow: none;
    border-bottom-color: white;
    outline: 0 none;
    transition-duration: 0.3s;
    width: 80%;
  }
  ${mobile({
    textAlign: "center",
    fontSize: ".9em",
  })}
`;

export const Button = styled.button`
  left: 10px;
  background-color: #b6baba;
  border-radius: 10px;
  padding: 0.3em;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  ${mobile({
    width: "20vw",
  })}
`;
