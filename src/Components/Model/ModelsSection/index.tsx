import useModel from '../useModel';

import { ReactNode, useEffect, useRef } from 'react';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    modelName: string;
    overlayNode: React.ReactNode; // Elemento a ser rendenizado na tela!
}

const ModelsSection: React.FC<Props> = ({modelName, overlayNode, children, ...props}) => {

    const { registerModel } = useModel(modelName)

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) registerModel({ modelName, overlayNode, sectionRef })
    }, [modelName, overlayNode, sectionRef])

    return (
        <Container ref={sectionRef} {...props}>
            {children}
        </Container>
    )
}

export default ModelsSection;