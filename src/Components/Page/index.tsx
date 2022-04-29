import React from 'react';
import { ModelsSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>   
        <div>
              {[
                'Model 3',
                'Model Y',
                'Model S',
                'Model X',
                'Solar Panels',
                'Solar Roof',
                'Accessories',
            ].map(modelName => (
                <ModelsSection
                key={modelName}
                className='colored'
                modelName={modelName}
                overlayNode={
                    <DefaultOverlayContent
                        label={modelName}
                        description="Order Online for Delivery"
                    />
                }
                />
            ))}
            
        </div>
          <Spacer/>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;