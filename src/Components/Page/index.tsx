import React from 'react';
import { ModelsSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
            <ModelsSection
                modelName="Model One"
                overlayNode={
                    <DefaultOverlayContent
                        label='Model One'
                        description="Order Online for Delivery"
                    />
                }
            />
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;