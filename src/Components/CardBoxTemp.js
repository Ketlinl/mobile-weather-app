import styled from "styled-components/native";

const CardBoxTemp = props => {
    return (
        <Container header={props.header}>
          <FlexContainer>
            {props.children}
          </FlexContainer>
        </Container>
    )
}

const Container = styled.View`
    margin-top: 31px;
    margin-left: 40px;
    margin-right: 40px;
    flex-direction: row;
    justify-content: space-around;
    height: 47px;
    background-color: rgba(0, 16, 38, 0.3);
    box-shadow: 0 0;
    shadow-radius: 20px;
    shadow-color: rgba(0, 0, 0, 0.25);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const FlexContainer = styled.View`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: space-around;
`;

export default CardBoxTemp;