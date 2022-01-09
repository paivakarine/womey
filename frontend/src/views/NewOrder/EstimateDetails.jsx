import { useSelector } from "react-redux";
import styled from "styled-components";
import EstimateMap from "./EstimateMap";

export const EstimateDetails = () => {
  const hasEstimate = useSelector((state) => !!state.order.currentEstimate);

  if (!hasEstimate) {
    return (
      <BoxDeafault>
        <p className="m-0">Preencha as informações solicitadas</p>
      </BoxDeafault>
    );
  }

  return (
    <BoxDeafault>
      <EstimateMap />
    </BoxDeafault>
  );
};

const BoxDeafault = styled.div`
  background-color: #efefef;
  border: 1px dashed #000000;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
