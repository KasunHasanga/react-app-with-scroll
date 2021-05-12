import React from "react";
import { ServiceContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./serviceElements";
import Icon1 from "../../images/svg-2.svg"
import Icon2 from "../../images/svg-4.svg"
import Icon3 from "../../images/svg-5.svg"
const Services = () => {
  return (
    <ServiceContainer>
      <ServicesH1 id='signup'>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expences</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your Overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Office</ServicesH2>
          <ServicesP>
            You Can Access our platform Online anywhere in the World
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benifits</ServicesH2>
          <ServicesP>
            Our Special membership card that 5% of money back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServiceContainer>
  );
};

export default Services;
