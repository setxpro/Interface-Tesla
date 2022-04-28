import { useCallback, useRef, useState } from 'react';
import ModelsContext, { CarModel } from '../ModelsContext';
import { Container, OverlaysRoot } from './styles';
import ModelOverlay from '../ModelOverlay';

const ModelsWrapper = ({children}:{children: JSX.Element}) => {

    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

    // Registrar um modelo dentro do meu State...
    const registerModel = useCallback((model: CarModel) => {
        setRegisteredModels(state => [...state, model])
        // ...state -> pega todos os modelos já registrados e registra um novo
    }, [])

    // Remover um modelo
    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName));
    }, [])

    const getModelByName = useCallback((modelName: string) => {
       return registeredModels.find(item => item.modelName === modelName) || null
    }, [registeredModels])

    return (
        <ModelsContext.Provider value={{
            wrapperRef, 
            registeredModels,
            registerModel,
            unregisterModel,
            getModelByName
        }}>
            <Container ref={wrapperRef}>

                <OverlaysRoot>
                    {registeredModels.map(item => (
                        <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
                    ))}
                </OverlaysRoot>

                {children}
            </Container>
        </ModelsContext.Provider>
    )
}

export default ModelsWrapper;   