
import { ReactNode } from 'react';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    modelName: string;
    overlayNode: React.ReactNode; // Elemento a ser rendenizado na tela!
    // children: JSX.Element;
}

const ModelsSection: React.FC<Props> = ({modelName, overlayNode, children, ...props}) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default ModelsSection;